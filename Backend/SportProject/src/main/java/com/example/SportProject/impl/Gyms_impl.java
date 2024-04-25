package com.example.SportProject.impl;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Gyms;
import com.example.SportProject.repository.Gyms_Repo;
import com.example.SportProject.services.Gyms_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Gyms_impl implements Gyms_Service {

    @Autowired
    private Gyms_Repo gyms_repo;

    @Override
    public List<Gyms> getall() {
        return gyms_repo.findAll();
    }

    @Override
    public List<Gyms> getbyplace(String place_gym) {
        return gyms_repo.findByGymPlace(place_gym);
    }

    @Override
    public Gyms Addgym(Gyms gyms) {
        return gyms_repo.save(gyms);
    }
}
