package com.example.SportProject.services;

import com.example.SportProject.Utils.RetourMessage;
import com.example.SportProject.model.Musculation_Exercices;
import com.example.SportProject.model.Musculation_Programmes;

import java.util.List;

public interface Musculation_ProgrammesService {
    List<Musculation_Programmes> getAllMusculationProgrammes();
    Musculation_Programmes getMusculationProgrammesById(int IdMusculationProgrammes);
    Musculation_Programmes AddMusculationProgrammes(Musculation_Programmes MusculationProgrammes);
    RetourMessage DeleteMusculationProgrammesById(int IdMusculationProgrammes);
    RetourMessage UpdateMusculationProgrammes(Musculation_Programmes MusculationProgrammes);
}
