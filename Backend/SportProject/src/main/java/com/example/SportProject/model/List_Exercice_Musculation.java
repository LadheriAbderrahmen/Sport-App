package com.example.SportProject.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "List_Exercice_Musculation")
public class List_Exercice_Musculation {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;

    @OneToMany(mappedBy = "listExerciceMusculation")
    private Set<Musculation_Exercices> Musculation_Exercices;
    @OneToOne
    @JoinColumn(name = "accountUser_Id")
    private Account_User accountUser;

}
