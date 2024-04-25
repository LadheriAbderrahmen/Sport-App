package com.example.SportProject.Utils;

import com.example.SportProject.model.Account_User;
import com.example.SportProject.repository.Account_User_Repo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtUtils {
    @Autowired
    public Account_User_Repo accountUserRepo;
    public static final String SECRET_KEY = "9quRH00i2VAjSsE3/v95uS16hnFjui9pu14RfOg5q5zTHRpvNGn++QrKo0v++nN4G1PZhmBTJxdBs2E8GMtwkzNHLN25fhT/9zQPelL0wIy9PYRxAvhuTh+MiGLTyA/DHS03ZcEf6zxKtKOs3+zkoJgRLhHAt48GQ15XY9Ja6UzEnVT/f1Q3se4sgLD8/Mp940QFu76wyQBDRRAI3dr7MkL5XMFgWvFelCseKc4bivN1IJFt944LeoPmnQ+qUBE1bqgjf0evLdV0TOVdLBco5y4k6ArM1ibWlnLaXPU7NlosUdAdWiP5LiYGpvYd79C6ytwiXBCWYDAWzmmxzofM0cf09UkIDCRhMa5zS/UOgks=";
    public Key getSecretKey(){
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public  <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public String extractUsername(String token) {
        return extractClaim(token  , Claims::getSubject);
    }

    public   Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .setSigningKey(getSecretKey())
                .parseClaimsJws(token)
                .getBody();
    }

    public  String GeneratedToken(Account_User accountUser) {
        Date date = new Date();
        Date expirationDate = new Date(date.getTime() + 60000);
        return Jwts.builder()
                .claim("authorities" , accountUser.getRole())
                .setSubject(accountUser.getEmail())
                .setIssuedAt(date)
                .setExpiration(expirationDate)
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    public  String GeneratedRefreshToken(Account_User accountUser) {
        Date date = new Date();
        Date expirationDateRefresh = new Date(date.getTime() + TimeUnit.DAYS.toMillis(7));
        Date expirationDate = new Date(date.getTime() + 120000);

        return Jwts.builder()
                .claim("authorities" , accountUser.getRole())
                .setSubject(accountUser.getEmail())
                .setIssuedAt(date)
                .setExpiration(expirationDateRefresh)
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public  String extractTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
    public  boolean isTokenValid(String token , Account_User accountUser){
        final String username = extractUsername(token);
        return (username.equals(accountUser.getEmail()) && !isTokenExpired(token));
    }

    public   boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public   Date extractExpiration(String token) {
        return extractClaim(token , Claims::getExpiration);
    }

    public  Authentication getAuthentication(String token) {

        String username = extractUsername(token);

        Account_User accountUser = accountUserRepo.findByEmail(username);
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_"+accountUser.getRole());
        System.out.println(List.of(grantedAuthority));

        // Creating a UserDetails object, e.g., User
        User userDetails = new User(accountUser.getEmail(), accountUser.getPassword(), List.of(grantedAuthority));

        // Creating an Authentication object using UsernamePasswordAuthenticationToken
        if (isTokenValid(token , accountUser)) {
            return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        }

        return null;
    }

}
