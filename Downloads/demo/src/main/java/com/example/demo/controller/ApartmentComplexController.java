package com.example.demo.controller;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ApartmentComplex;
import com.example.demo.service.ApartmentComplexService;

@RestController
@RequestMapping("/apartment-complexes")
public class ApartmentComplexController {

    @Autowired
    private ApartmentComplexService firebaseService;

    @GetMapping
    public CompletableFuture<List<ApartmentComplex>> getAllComplexes() {
        return firebaseService.getAllComplexes();
    }

    @PostMapping
    public CompletableFuture<Void> addComplex(@RequestBody ApartmentComplex complex) {
        return firebaseService.addComplex(complex);
    }
}
