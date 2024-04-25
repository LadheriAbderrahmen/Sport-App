package com.example.SportProject.Utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.http.HttpClient;

@RestControllerAdvice
public class GloabalAccountUserException {

    @ExceptionHandler(value = RetourMessage.class)
    public ResponseEntity<String> HandleRetourMessage(RetourMessage mesg){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(mesg.getMessage());
    }
}
