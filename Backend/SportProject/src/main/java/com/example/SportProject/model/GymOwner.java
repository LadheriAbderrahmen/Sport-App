package com.example.SportProject.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "GymOwner")
@DiscriminatorValue("GymOwner")
@Data
public class GymOwner extends MainUser{

    @Column(name = "phone")
    private int phone;

    @Column(name = "gym")
    private String gym;

}
