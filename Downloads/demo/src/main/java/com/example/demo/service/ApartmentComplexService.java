package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Service;

import com.example.demo.model.ApartmentComplex;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

@Service
public class ApartmentComplexService {
    private final DatabaseReference complexRef;

    public ApartmentComplexService() {
        complexRef = FirebaseDatabase.getInstance().getReference("apartmentComplexes");
    }

    public CompletableFuture<Void> addComplex(ApartmentComplex complex) {
        return CompletableFuture.runAsync(() -> complexRef.push().setValueAsync(complex));
    }

    public CompletableFuture<List<ApartmentComplex>> getAllComplexes() {
        CompletableFuture<List<ApartmentComplex>> future = new CompletableFuture<>();
        complexRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot snapshot) {
                List<ApartmentComplex> complexes = new ArrayList<>();
                for (DataSnapshot child : snapshot.getChildren()) {
                    ApartmentComplex complex = child.getValue(ApartmentComplex.class);
                    complexes.add(complex);
                }
                future.complete(complexes);
            }
            @Override
            public void onCancelled(DatabaseError error) {
                future.completeExceptionally(new RuntimeException(error.toException()));
            }
        });
        return future;
    }
}