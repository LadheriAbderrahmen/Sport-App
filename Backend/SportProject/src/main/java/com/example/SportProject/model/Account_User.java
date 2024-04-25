package com.example.SportProject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name="Account_User")
@Data
public class Account_User {

    private String Token;
    private String RefreshToken;

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "Username")
    private String Username;
    @Column(name = "Lastname")
    private String Lastname;
    @Column(name = "age")
    private Long age;
    @Column(name = "email")
    private String email;
    @Column(name = "genre")
    private String genre;
    @Column(name = "password")
    private String password;
    @Column(name = "phone")
    private int phone;
    @Column(name = "place")
    private String place;
    @Column(name = "name_gym")
    private String Name_Gym;
    @Column(name = "role")
    private String role;

    @OneToOne(mappedBy = "accountUser")
    private List_Exercice_Musculation listExerciceMusculation;

    @OneToOne(mappedBy = "accountUser")
    private Musculation_Programmes musculationProgrammes;
    @OneToOne(mappedBy = "accountUser")
    private List_Healthy_Food listHealthyFood;

}
