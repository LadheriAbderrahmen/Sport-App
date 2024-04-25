package com.example.SportProject.Utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

public class RetourMessage extends RuntimeException {
    private String message;

    public RetourMessage(String message){
        super(message);
        this.message = message;
    }
    @Override
    public String toString(){
        return "Retour Message : " + message;
    }

}
