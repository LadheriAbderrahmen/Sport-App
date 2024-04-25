package com.example.SportProject.impl;

import com.example.SportProject.Utils.JwtUtils;
import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Account_User;
import com.example.SportProject.model.Coache;
import com.example.SportProject.model.GymOwner;
import com.example.SportProject.model.NormalUser;
import com.example.SportProject.repository.Account_User_Repo;
import com.example.SportProject.repository.CoacheRepo;
import com.example.SportProject.repository.GymOwnerRepo;
import com.example.SportProject.repository.NormalUserRepo;
import com.example.SportProject.services.Account_UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class Account_UserServiceImpl implements Account_UserService{

    @Autowired
    private Account_User_Repo accountUserRepo;
    @Autowired
    private NormalUserRepo normalUserRepo;

    @Autowired
    private GymOwnerRepo gymOwnerRepo;

    @Autowired
    private CoacheRepo coacheRepo;
    @Autowired
    public JwtUtils jwtUtils;

    @Override
    public List<Account_User> getAllUserAccount() {
        return accountUserRepo.findAll();
    }

    @Override
    public Account_User getUserAccountById(int IdUserAccount) {

        return accountUserRepo.findById(IdUserAccount).orElse(null);
    }

    @Override
    public Account_User Login(String email, String password) {
        try {

            Account_User account = accountUserRepo.findByEmail(email);

            if (account == null) {
                throw new RetourMessage("User Account Undefined");
            }

            if (passwordMatches(password, account.getPassword())) {
                String jwtAccessToken = jwtUtils.GeneratedToken(account);
                String jwtRefreshToken = jwtUtils.GeneratedRefreshToken(account);
                account.setToken(jwtAccessToken);
                account.setRefreshToken(jwtRefreshToken);
                return account;
            } else {
                throw new RetourMessage("Email or Password Incorrect");
            }
        } catch (Exception e) {
            throw new RetourMessage(e.getMessage());
        }
    }
    private boolean passwordMatches(String rawPassword, String hashedPassword) {
        // Implement password hashing and matching logic using a secure algorithm (e.g., BCrypt)
        // Example using BCrypt: return BCrypt.checkpw(rawPassword, hashedPassword);
        return rawPassword.equals(hashedPassword); // This is just a placeholder; replace with secure hashing logic
    }
    @Override
    public Account_User AddUserAccount(Account_User UserAccount) {
        try{
            Account_User acc = accountUserRepo.findByEmail(UserAccount.getEmail());
            if(acc != null){
                throw new RetourMessage("Email deja utiliser");
            }
            return accountUserRepo.save(UserAccount);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }

    }

    @Override
    public RetourMessage DeleteUserAccountById(int IdUserAccount) {
        try{

            Account_User acc = accountUserRepo.findById(IdUserAccount).orElse(null);

            if(acc == null){
                return new RetourMessage("Failed Deleted");
            }

            accountUserRepo.deleteById(IdUserAccount);
            return new RetourMessage("Successfuly Deleted");

        }catch (Exception e){

            return new RetourMessage("error delete : " + e);

        }

    }

    @Override
    public RetourMessage UpdateUserAccount(Account_User UserAccount) {
        try{
            Account_User acc = accountUserRepo.findById(UserAccount.getId()).orElse(null);
            if(acc == null){
                return new RetourMessage("user not found");
            }

            acc.setUsername(UserAccount.getUsername());
            acc.setLastname(UserAccount.getLastname());
            acc.setAge(UserAccount.getAge());
            acc.setEmail(UserAccount.getEmail());
            acc.setPhone(UserAccount.getPhone());
            acc.setName_Gym(UserAccount.getName_Gym());

            accountUserRepo.save(acc);

            return new RetourMessage("user "+ UserAccount.getId()+" is successfuly updated");

        }catch(Exception e){
            throw  new RetourMessage(e.getMessage());
        }


    }

    @Override
    public String refreshtoken(String RefreshToken){
        try{

            if(RefreshToken == null){
                throw new RetourMessage("undefiend");
            }

            String username = jwtUtils.extractUsername(RefreshToken);
            Account_User accountUser = accountUserRepo.findByEmail(username);

            if (accountUser == null){
                throw new RetourMessage("ubndefiend Account");
            }

            boolean validation = jwtUtils.isTokenValid(RefreshToken , accountUser);

            if(validation == false){
                throw new RetourMessage("invalid Refresh Token");
            }

            String jwtUtils1 = jwtUtils.GeneratedToken(accountUser);

            return jwtUtils1;

        }catch (Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }

    @Override
    public Coache AddCoache(Coache coache) {
        try{
            return coacheRepo.save(coache);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }

    @Override
    public NormalUser AddNormalUser(NormalUser normalUser) {
        try{
            NormalUser normalUser1 = normalUserRepo.findByemail(normalUser);
            if(normalUser1 != null){
                throw new RetourMessage("normalUser already exist");
            }
            return normalUserRepo.save(normalUser);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }

    @Override
    public GymOwner AddGymOwner(GymOwner gymOwner) {
        try{
            GymOwner gymOwner1 = gymOwnerRepo.findByemail(gymOwner);
            if(gymOwner1 != null){
                throw new RetourMessage("gymowner already exist");
            }
            return gymOwnerRepo.save(gymOwner);
        }catch(Exception e){
            throw new RetourMessage(e.getMessage());
        }
    }


}
