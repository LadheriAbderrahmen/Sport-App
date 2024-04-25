package com.example.SportProject.repository;

import com.example.SportProject.model.Coache;
import com.example.SportProject.model.NormalUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NormalUserRepo extends JpaRepository<NormalUser , Long> {
    NormalUser findByemail(NormalUser normalUser);

}
