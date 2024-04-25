package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Musculation_Category;
import com.example.SportProject.model.Musculation_Exercices;

import java.util.List;

public interface Musculation_ExercicesService {
    List<Musculation_Exercices> getAllMusculationExercices();
    Musculation_Exercices getMusculationExercicesById(int IdMusculationExercices);
    Musculation_Exercices AddMusculationExercices(Musculation_Exercices MusculationExercices);
    RetourMessage DeleteMusculationExercicesById(int IdMusculationExercices);
    RetourMessage UpdateMusculationExercices(Musculation_Exercices MusculationExercices);
}
