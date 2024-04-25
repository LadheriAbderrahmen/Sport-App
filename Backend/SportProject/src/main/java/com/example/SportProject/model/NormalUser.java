package com.example.SportProject.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "NormalUser")
@DiscriminatorValue("NormalUser")
@Data
public class NormalUser extends MainUser{

    @Column(name = "genre")
    private String genre;

    @Column(name = "age")
    private Long age;

}
