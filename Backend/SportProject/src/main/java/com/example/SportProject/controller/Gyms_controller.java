package com.example.SportProject.controller;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.impl.Gyms_impl;
import com.example.SportProject.model.Account_User;
import com.example.SportProject.model.Gyms;
import com.example.SportProject.services.Gyms_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gyms")
public class Gyms_controller {
    @Autowired
    private Gyms_Service gyms_service;
    @GetMapping
    public List<Gyms> GetAllGyms(){
        return  gyms_service.getall();
    }
    @GetMapping("/{place}")
    public List<Gyms> getByPlace(@PathVariable String place) {
        return gyms_service.getbyplace(place);
    }

    @PostMapping
    public Gyms AddGym(@RequestBody  Gyms gyms){
            return gyms_service.Addgym(gyms);
    }

}
