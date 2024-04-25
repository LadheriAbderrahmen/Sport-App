package com.example.SportProject.repository;

import com.example.SportProject.model.Coache;
import com.example.SportProject.model.GymOwner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymOwnerRepo extends JpaRepository<GymOwner , Long> {
    GymOwner findByemail(GymOwner gymOwner);

}
