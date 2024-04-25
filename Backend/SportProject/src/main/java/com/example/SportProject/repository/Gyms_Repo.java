package com.example.SportProject.repository;

import com.example.SportProject.model.Gyms;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Gyms_Repo extends JpaRepository<Gyms , Long>{
    List<Gyms> findByGymPlace(String place_gym);

}
