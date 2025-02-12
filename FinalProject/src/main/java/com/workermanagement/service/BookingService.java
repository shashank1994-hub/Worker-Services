package com.workermanagement.service;

import com.workermanagement.model.Booking;
import com.workermanagement.model.User;
import com.workermanagement.model.Worker;
import com.workermanagement.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private WorkerService workerService;
    
    @Autowired
    private UserService userService;
    
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }
    
    public Booking bookWorker(Long userId, Long workerId) {
        User user = userService.getUserById(userId);
        Worker worker = workerService.getWorkerById(workerId);
        
        if (user == null || worker == null || !worker.isAvailable()) {
            return null; 
        }
        
        
        workerService.markWorkerAsBusy(worker);
        
        
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setWorker(worker);
        booking.setBookingTime(LocalDateTime.now());
        return bookingRepository.save(booking);
    }
    
    public void completeBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId).orElse(null);
        if (booking != null) {
            
            booking.setCompleted(true);
            booking.setCompletionTime(LocalDateTime.now());
            bookingRepository.save(booking);
            
            
            workerService.markWorkerAsAvailable(booking.getWorker());
        }
    }
    
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
