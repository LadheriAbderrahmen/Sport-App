package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Healthy_Food;
import com.example.SportProject.model.Musculation_Category;

import java.util.List;

public interface Musculation_CategoryService {
    List<Musculation_Category> getAllMusculationCategory();
    Musculation_Category getMusculationCategoryById(int IdMusculationCategory);
    Musculation_Category AddMusculationCategory(Musculation_Category MusculationCategory);
    RetourMessage DeleteMusculationCategorydById(int IdMusculationCategory);
    RetourMessage UpdateMusculationCategory(Musculation_Category MusculationCategory);
}
