package com.workermanagement.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "worker_id", nullable = false)
    private Worker worker;
    
    private LocalDateTime bookingTime;
    private boolean isCompleted = false;
    private LocalDateTime completionTime;
    private double totalCost;
}
