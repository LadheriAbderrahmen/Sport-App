package com.example.SportProject.controller;

import com.example.SportProject.Dto.Account_UserDTO;
import com.example.SportProject.Utils.JwtUtils;
import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.impl.Account_UserServiceImpl;
import com.example.SportProject.model.Account_User;
import com.example.SportProject.model.Coache;
import com.example.SportProject.model.GymOwner;
import com.example.SportProject.model.NormalUser;
import com.example.SportProject.services.Account_UserService;
import com.sun.jdi.event.ExceptionEvent;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/Account_User")
public class Account_UserController {
    @Autowired
    private Account_UserService accountUserService;

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public List<Account_User> getAllUsers(){
            return accountUserService.getAllUserAccount();
    }
    @GetMapping("/{id}")
    public Account_User getUserById(@PathVariable int id){
        return accountUserService.getUserAccountById(id);
    }
    @GetMapping("/getCsrfToken")
    public String getCsrfToken(HttpServletRequest request) {
        CsrfToken csrfToken = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

        if (csrfToken != null) {
            // Get the actual token value
            String token = csrfToken.getToken();
            return token;
        } else {
            return "CSRF token not found";
        }
    }
    @PostMapping("/Signup")
    public Account_User AddUser(@RequestBody  Account_User accountUser){
        try{
            return accountUserService.AddUserAccount(accountUser);
        }catch (RetourMessage e){
            throw new RetourMessage(e.getMessage());
        }
    }
    @PostMapping("/Coache")
    public Coache AddCoache(@RequestBody Coache coache){
        try{
            return accountUserService.AddCoache(coache);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }
    @PostMapping("/Normaluser")
    public NormalUser AddNormaluser(@RequestBody NormalUser normalUser){
        try{
            return accountUserService.AddNormalUser(normalUser);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }
    @PostMapping("/gymowner")
    public GymOwner AddGymOwner(@RequestBody GymOwner gymOwner){
        try{
            return accountUserService.AddGymOwner(gymOwner);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public String DeleteUser(@PathVariable int id){
        return accountUserService.DeleteUserAccountById(id).toString();
    }

    @PutMapping
    public String UpdateUserAcc(@RequestBody Account_User accountUser){
        return accountUserService.UpdateUserAccount(accountUser).toString();
    }
    @PostMapping("/Login")
    public ResponseEntity<Object> LoginAccount(@RequestBody Account_UserDTO accountUserDTO){
        try{
            return  ResponseEntity.ok(accountUserService.Login(accountUserDTO.getEmail() , accountUserDTO.getPassword()));
        }catch(RetourMessage e){
            throw new RetourMessage("error occurde " + e.getMessage());
        }
    }
    @PostMapping("/auth/RefreshToken")
    public ResponseEntity<String> RefreshToken(@RequestBody String RefreshToken){
        try {
            return ResponseEntity.ok(accountUserService.refreshtoken(RefreshToken));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
    @GetMapping("/admin-only")
    public ResponseEntity<String> adminOnlyMethod() {
        return ResponseEntity.ok("This method is accessible only to users with the 'ADMIN' role");
    }

}
