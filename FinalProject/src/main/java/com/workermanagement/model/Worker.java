package com.workermanagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String skill;
    private boolean isAvailable = true;
    private double hourlyRate;
    private int experienceYears;
}
