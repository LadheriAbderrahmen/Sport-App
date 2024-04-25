package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Account_User;
import com.example.SportProject.model.Healthy_Food;

import java.util.List;

public interface Healthy_FoodService {
    List<Healthy_Food> getAllHealthyfood();
    Healthy_Food getHealthyfoodById(int IdHealthyfood);
    Healthy_Food AddHealthyfood(Healthy_Food Healthyfood);
    RetourMessage DeleteHealthyfoodById(int IdHealthyfood);
    RetourMessage UpdateHealthyfood(Healthy_Food Healthyfood);
}
