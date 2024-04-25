package com.example.SportProject.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Musculation_Category")
public class Musculation_Category {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;

    @OneToMany(mappedBy = "musculationCategory")
    private Set<Musculation_Exercices> Musculation_Exercices;

}
