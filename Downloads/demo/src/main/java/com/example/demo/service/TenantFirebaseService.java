package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Service;

import com.example.demo.model.Tenant;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

@Service
public class TenantFirebaseService {

    private final DatabaseReference tenantRef;

    public TenantFirebaseService() {
        tenantRef = FirebaseDatabase.getInstance().getReference("tenants");
    }

    // Add a tenant
    public CompletableFuture<Void> addTenant(Tenant tenant) {
        return CompletableFuture.runAsync(() -> tenantRef.push().setValueAsync(tenant));
    }

    // Get all tenants (asynchronously)
    public CompletableFuture<List<Tenant>> getAllTenants() {
        CompletableFuture<List<Tenant>> future = new CompletableFuture<>();
        tenantRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot snapshot) {
                List<Tenant> tenants = new ArrayList<>();
                for (DataSnapshot child : snapshot.getChildren()) {
                    Tenant tenant = child.getValue(Tenant.class);
                    tenants.add(tenant);
                }
                future.complete(tenants);
            }
            @Override
            public void onCancelled(DatabaseError error) {
                future.completeExceptionally(new RuntimeException(error.toException()));
            }
        });
        return future;
    }

    // Delete a tenant by key
 public CompletableFuture<Void> deleteTenant(String key) {
    System.out.println("Trying to delete tenant with key: " + key);
    return CompletableFuture.runAsync(() ->
        tenantRef.child(key).removeValueAsync()
    );
}

    // Update a tenant by key
    public CompletableFuture<Void> updateTenant(String key, Tenant tenant) {
        return CompletableFuture.runAsync(() ->
            tenantRef.child(key).setValueAsync(tenant)
        );
    }
}
