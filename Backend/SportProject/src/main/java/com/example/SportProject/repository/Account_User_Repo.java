package com.example.SportProject.repository;

import com.example.SportProject.model.Account_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface Account_User_Repo extends JpaRepository<Account_User , Integer> {
    Account_User findByEmail(String email);

}
