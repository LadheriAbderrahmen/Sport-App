package com.example.SportProject.repository;

import com.example.SportProject.model.Coache;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoacheRepo extends JpaRepository<Coache , Long> {
    Coache findByEmail(Coache coache);
}
