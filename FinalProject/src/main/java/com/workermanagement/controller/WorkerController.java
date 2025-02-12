package com.workermanagement.controller;

import com.workermanagement.model.Worker;
import com.workermanagement.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/workers")
public class WorkerController {
    
    @Autowired
    private WorkerService workerService;
    
    
    @GetMapping
    public List<Worker> getAllWorkers() {
        return workerService.getAllWorkers();
    }
    
    @GetMapping("/{id}")
    public Worker getWorkerById(@PathVariable Long id) {
        return workerService.getWorkerById(id);
    }
    
    
    @PostMapping
    public Worker createWorker(@RequestBody Worker worker) {
        return workerService.createWorker(worker);
    }
    
    @PutMapping("/{id}")
    public Worker updateWorker(@PathVariable Long id, @RequestBody Worker workerDetails) {
        return workerService.updateWorker(id, workerDetails);
    }
    
    @DeleteMapping("/{id}")
    public void deleteWorker(@PathVariable Long id) {
        workerService.deleteWorker(id);
    }
    
    
    @GetMapping("/available")
    public List<Worker> getAvailableWorkers() {
        return workerService.getAvailableWorkers();
    }
    
    
    @GetMapping("/available/{skill}")
    public List<Worker> getAvailableWorkersBySkill(@PathVariable String skill) {
        return workerService.getAvailableWorkersBySkill(skill);
    }
}
