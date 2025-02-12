package com.workermanagement.controller;

import com.workermanagement.model.Booking;
import com.workermanagement.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookings")
public class BookingController {
    
    @Autowired
    private BookingService bookingService;
    
    
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
    
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }
    
    
    @PostMapping("/book")
    public Booking bookWorker(@RequestParam Long userId, @RequestParam Long workerId) {
        return bookingService.bookWorker(userId, workerId);
    }
    
    
    @PostMapping("/complete/{id}")
    public void completeBooking(@PathVariable Long id) {
        bookingService.completeBooking(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }
}
