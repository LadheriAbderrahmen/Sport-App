package com.example.SportProject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Musculation_Exercices")
public class Musculation_Exercices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;
    @Column(name = "Name_Exercice")
    private String Name_Exercice;
    @Column(name = "Description")
    private String Description;
    @Column(name = "Video")
    private Byte Video;

    @ManyToOne
    @JoinColumn(name = "musculationCategory_Id")
    private Musculation_Category musculationCategory;
    @ManyToOne
    @JoinColumn(name = "listExerciceMusculation_Id" )
    private List_Exercice_Musculation listExerciceMusculation;
}
