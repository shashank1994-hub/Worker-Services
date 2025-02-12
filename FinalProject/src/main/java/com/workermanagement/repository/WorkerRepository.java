package com.workermanagement.repository;

import com.workermanagement.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WorkerRepository extends JpaRepository<Worker, Long> {
    List<Worker> findBySkillAndIsAvailableTrue(String skill);
    List<Worker> findByIsAvailableTrue();
}
