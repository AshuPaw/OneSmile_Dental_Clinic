package com.one_smile.controller;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Enquiry_table;
import com.one_smile.services.EnquiryService;

import Exceptions.AppointmentException;
import Exceptions.EnquiryExceptions;

@CrossOrigin
@RestController
@RequestMapping("/Enquiry")
public class EnquiryController {

	@Autowired
	public EnquiryService enqservice;
	
	@GetMapping("/allEnquire")
	public Collection<Enquiry_table>getEngurie()  {
		Collection<Enquiry_table> allenquire = enqservice.getAllEnquiry();
		return allenquire;
	}
	
	@GetMapping("/allEnquire/{id}")
	public Enquiry_table getOneEnquiry (@PathVariable Integer id) {
		Enquiry_table foundEnquiry = enqservice.getOneEnquiry(id);
		if (foundEnquiry == null)
		{
			EnquiryExceptions exp = new EnquiryExceptions("Enquiry Does not exits");
			throw exp;
		}
		return foundEnquiry;
	}
	
	@PutMapping("/updateEnquiry/{id}")
	public Enquiry_table updateEnq (@PathVariable Integer id, @RequestBody Enquiry_table newenq) {
		Enquiry_table oldenq = enqservice.getOneEnquiry(id);
		return enqservice.updEnquiry(oldenq, newenq);
	}
	
	@PostMapping("/addenquiry")
	public Enquiry_table addenq(@RequestBody Enquiry_table enq) {
		enq.setStatus("Pending");
		return enqservice.addEnquiry(enq);
	}
}