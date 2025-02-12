package com.workermanagement.service;

import com.workermanagement.model.Worker;
import com.workermanagement.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WorkerService {
    @Autowired
    private WorkerRepository workerRepository;
    
    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }
    
    public Worker getWorkerById(Long id) {
        return workerRepository.findById(id).orElse(null);
    }
    
    public Worker createWorker(Worker worker) {
        return workerRepository.save(worker);
    }
    
    public Worker updateWorker(Long id, Worker workerDetails) {
        Worker worker = workerRepository.findById(id).orElse(null);
        if (worker != null) {
            worker.setName(workerDetails.getName());
            worker.setSkill(workerDetails.getSkill());
            worker.setHourlyRate(workerDetails.getHourlyRate());
            worker.setExperienceYears(workerDetails.getExperienceYears());
            worker.setAvailable(workerDetails.isAvailable());
            return workerRepository.save(worker);
        }
        return null;
    }
    
    public void deleteWorker(Long id) {
        workerRepository.deleteById(id);
    }
    
    public List<Worker> getAvailableWorkers() {
        return workerRepository.findByIsAvailableTrue();
    }
    
    public List<Worker> getAvailableWorkersBySkill(String skill) {
        return workerRepository.findBySkillAndIsAvailableTrue(skill);
    }
    
    
    public void markWorkerAsBusy(Worker worker) {
        worker.setAvailable(false);
        workerRepository.save(worker);
    }
    
    public void markWorkerAsAvailable(Worker worker) {
        worker.setAvailable(true);
        workerRepository.save(worker);
    }
}
