package com.example.SportProject.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Coache")
@DiscriminatorValue("Coache")
@Data
public class Coache extends MainUser{

    @Column(name = "genre")
    private String genre;

    @Column(name = "age")
    private Long age;

    @Column(name = "phone")
    private int phone;

    @Column(name = "gym")
    private String gym;


}
