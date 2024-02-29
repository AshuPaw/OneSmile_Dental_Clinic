package com.one_smile.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.Appointments;
import com.one_smile.services.AppointmentService;

import Exceptions.AppointmentException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin
@RestController
@RequestMapping("/appointments")
public class AppointmentController {
	
	@Autowired
	private AppointmentService appservice;
	
	@GetMapping("/getallappointments")
	public Collection<Appointments> getallappoinmnets(){
		return appservice.getallappointments();
	}
	
	
	@PostMapping("/addappointment")
	public ResponseEntity<Appointments> addappointmnet(@RequestBody Appointments app) {
		app.setStatus("Pending");
		return appservice.addappointmnets(app);
	}
	
	@GetMapping("/getallappointments/{id}")
	public Appointments getOneAppointments(@PathVariable Integer id) {
		Appointments foundAppointments = appservice.getOneAppointments(id);
		if (foundAppointments == null)
		{
			AppointmentException exp = new AppointmentException("Appointment does not exists");
			throw exp;
		}
		return foundAppointments;
	}
	
	
	@PutMapping("/updateappointment/{id}")
	public Appointments updateAppointment(@PathVariable Integer id, @RequestBody Appointments newapp) {
		Appointments oldapp = appservice.getOneAppointments(id);
		return appservice.updateAppointments(oldapp, newapp);
	
	}
	

}
