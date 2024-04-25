package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.List_Exercice_Musculation;
import com.example.SportProject.model.List_Healthy_Food;

import java.util.List;

public interface List_Healthy_FoodService {
    List<List_Healthy_Food> getAllListHealthyFood();
    List_Healthy_Food getListHealthyFoodById(int IdListHealthyFood);
    List_Healthy_Food AddListHealthyFood(List_Healthy_Food ListHealthyFood);
    RetourMessage DeleteListHealthyFoodById(int IdListHealthyFood);
    RetourMessage UpdateListHealthyFood(List_Healthy_Food ListHealthyFood);

}
