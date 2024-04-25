package com.example.SportProject.services;

import com.example.SportProject.model.Gyms;

import java.util.List;

public interface Gyms_Service {
    List<Gyms> getall();
    List<Gyms> getbyplace(String placegym);
    Gyms Addgym(Gyms gyms);
}
