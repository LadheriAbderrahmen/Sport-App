package com.example.SportProject.model;


import jakarta.persistence.*;

@Entity
@Table(name = "Musculation_Programmes")
public class Musculation_Programmes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;
    @OneToOne
    @JoinColumn(name = "accountUser_Id")
    private Account_User accountUser;
}
