package com.one_smile.services;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.one_smile.entity.Appointments;
import com.one_smile.repositiry.AppointmentRepository;

@Repository
public class AppointmentService {

	@Autowired
	private AppointmentRepository appservice;

	public Collection<Appointments> getallappointments() {

		Collection<Appointments> allpp = appservice.findAll();

		return allpp;
	}

	public ResponseEntity<Appointments>  addappointmnets(Appointments app) {
		System.out.println(isSlotAvailable(app.getDate(), app.getTime()));
		bookings.addAll(getallappointments());
		if (isSlotAvailable(app.getDate(), app.getTime())) {
			 return ResponseEntity.ok(appservice.save(app));
					
		}
		//409
		return ResponseEntity.status(HttpStatus.CONFLICT).build();
	}

	public Appointments getOneAppointments(Integer id) {
		Appointments foundAppointments = null;
		Optional<Appointments> getOneAppointments = appservice.findById(id);
		if (!getOneAppointments.isEmpty())
			foundAppointments = getOneAppointments.get();
		return foundAppointments;
	}

	public Appointments updateAppointments(Appointments oldapp, Appointments newapp) {
		oldapp.setDate(newapp.getDate());
		oldapp.setTime(newapp.getTime());
		appservice.save(oldapp);
		return oldapp;
	}

	public void savestatus(Appointments newap) {
		appservice.save(newap);

	}

	private List<Appointments> bookings = new ArrayList<>();

	public boolean isSlotAvailable(LocalDate date, LocalTime time) {
		// Check if the slot is within working hours and not on Friday
		if (date.getDayOfWeek() == DayOfWeek.FRIDAY || time.isBefore(LocalTime.of(10, 0))
				|| time.isAfter(LocalTime.of(20, 0))) {
			System.out.println("abcd");
			return false;
		}

		// Check if the slot is available (no existing booking within the slot)
		for (Appointments booking : bookings) {
			LocalDateTime newdatetime = LocalDateTime.of(date, time);
			System.out.println(newdatetime);

			LocalDateTime combinedDateTime = LocalDateTime.of(booking.getDate(), booking.getTime());
			System.out.println(combinedDateTime);

			long minutesBetween = ChronoUnit.MINUTES.between(combinedDateTime, newdatetime);
			System.out.println("old time" + booking.getTime());
			System.out.println("new time" + time);
			if (minutesBetween >= 0 && minutesBetween < 20) {
				System.out.println("xyz");
				return false;
			}
		}

		// Check if the slot is within the next 2 months
		LocalDate maxBookingDate = LocalDate.now().plusMonths(2);
		System.out.println("2555");
		return date.isBefore(maxBookingDate);
	}

//    public void bookAppointment(LocalDateTime dateTime, String issueNotes) {
//        Booking newBooking = new Booking();
//        newBooking.setDateTime(dateTime);
//        newBooking.setIssueNotes(issueNotes);
//        bookings.add(newBooking);
//    }

}
