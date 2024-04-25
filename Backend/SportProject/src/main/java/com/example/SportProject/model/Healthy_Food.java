package com.example.SportProject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Healthy_Food")
public class Healthy_Food {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "Name")
    private  String Name;
    @Column(name = "Description")
    private String Description;
    @Column(name = "Calorie")
    private int Calorie;
    @Column(name = "Carbohydrate")
    private int Carbohydrate;
    @Column(name = "Proteins")
    private int Proteins;
    @Column(name = "Fats")
    private int Fats;
    @ManyToOne
    @JoinColumn(name = "listHealthyFood_Id")
    private List_Healthy_Food listHealthyFood;

}
