package com.example.SportProject.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "List_Healthy_Food")
public class List_Healthy_Food {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;
    @OneToMany(mappedBy = "listHealthyFood")
    private Set<Healthy_Food> healthyFoods;

    @OneToOne
    @JoinColumn(name = "accountUser_Id")
    private Account_User accountUser;
}
