package com.example.SportProject.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Gyms")
@Data
public class Gyms {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "gym_place")
    private String gymPlace;

    @Column(name= "gym_name")
    private String Gym_name;
}
