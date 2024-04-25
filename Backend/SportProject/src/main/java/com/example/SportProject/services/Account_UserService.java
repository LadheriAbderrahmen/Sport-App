package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Account_User;
import com.example.SportProject.model.Coache;
import com.example.SportProject.model.GymOwner;
import com.example.SportProject.model.NormalUser;

import java.util.List;

public interface Account_UserService {
    List<Account_User> getAllUserAccount();
    Account_User getUserAccountById(int IdUserAccount);
    Account_User Login(String email , String password) throws RetourMessage;
    Account_User AddUserAccount(Account_User UserAccount);
    RetourMessage DeleteUserAccountById(int IdUserAccount);
    RetourMessage UpdateUserAccount(Account_User UserAccount);
    String refreshtoken(String refreshtoken);

    Coache AddCoache(Coache coache);
    NormalUser AddNormalUser(NormalUser normalUser);

    GymOwner AddGymOwner(GymOwner gymOwner);
}
