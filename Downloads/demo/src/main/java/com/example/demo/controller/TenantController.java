package com.example.demo.controller;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Tenant;
import com.example.demo.service.TenantFirebaseService;

@RestController
@RequestMapping("/tenants")
public class TenantController {

    @Autowired
    private TenantFirebaseService firebaseService;

    @GetMapping
    public CompletableFuture<List<Tenant>> getAllTenants() {
        return firebaseService.getAllTenants();
    }

    @PostMapping
    public CompletableFuture<Void> addTenant(@RequestBody Tenant tenant) {
        return firebaseService.addTenant(tenant);
    }

    @DeleteMapping("/{key}")
    public CompletableFuture<Void> deleteTenant(@PathVariable String key) {
        return firebaseService.deleteTenant(key);
    }
    @PutMapping("/{key}")
    public CompletableFuture<Void> updateTenant(@PathVariable String key, @RequestBody Tenant tenant) {
        return firebaseService.updateTenant(key, tenant);
    }
}