package com.workermanagement.repository;

import com.workermanagement.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByWorkerId(Long workerId);
    List<Booking> findByUserId(Long userId);
}
