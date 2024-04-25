package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Healthy_Food;
import com.example.SportProject.model.List_Exercice_Musculation;

import java.util.List;

public interface List_Exercice_MusculationService {
    List<List_Exercice_Musculation> getAllListExercicesMusc();
    List_Exercice_Musculation getListExercicesMuscById(int IdListExercicesMusc);
    List_Exercice_Musculation AddListExercicesMusc(List_Exercice_Musculation ListExercicesMusc);
    RetourMessage DeleteListExercicesMuscById(int IdListExercicesMusc);
    RetourMessage UpdateListExercicesMusc(List_Exercice_Musculation ListExercicesMusc);
}
