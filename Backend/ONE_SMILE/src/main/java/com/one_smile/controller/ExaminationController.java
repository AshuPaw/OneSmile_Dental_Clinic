package com.one_smile.controller;

import java.util.Collection;
import java.util.Optional;

import org.antlr.v4.runtime.misc.ParseCancellationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Examinations;
import com.one_smile.entity.Payments;
import com.one_smile.services.AppointmentService;
import com.one_smile.services.ExaminationService;
import com.one_smile.services.PaymentsService;

import Exceptions.AppointmentException;

@CrossOrigin
@RestController
@RequestMapping("/examinations")
public class ExaminationController {
	@Autowired
	private ExaminationService exseervice;

	@Autowired
	private Appointments app;

	@Autowired
	private AppointmentService edp;

	@Autowired
	private PaymentsService paymentserv;

	@GetMapping("/allexamination")
	public Collection<Examinations> getalluser() {
		Collection<Examinations> allexamination = exseervice.getallexamination();
		return allexamination;
	}

	@PostMapping("/addexamination")
	public Examinations addappointmnet(@RequestBody Examinations ex) {
		Examinations id = exseervice.addexamination(ex);

		Integer appid = id.getAppointments().getApp_id();

		Appointments yg = edp.getOneAppointments(appid);

		yg.setStatus("completed");

		edp.addappointmnets(yg);
//		------------------------------------------------------------

		Integer examid = id.getEid();
		Integer charges = id.getCharges();
		System.out.println(charges);
		System.out.println(examid);

		
	//	--------------------------------------------------
		System.out.println(ex.getPaymentstatus());
		if(ex.getPaymentstatus().equals("completed")) {
			Payments ps = new Payments();
			ps.setCharges(charges);
			ps.setExaminations(ex);
			ps.setPayStatus("completed");
			paymentserv.addPayments(ps);
			
		}
		if(ex.getPaymentstatus().equals("pending")) {
			Payments ps = new Payments();
			ps.setCharges(charges);
			ps.setExaminations(ex);
			ps.setPayStatus("pending");
			paymentserv.addPayments(ps);
			
		}


		return id;

	}
//	-----------------------------------------------------------------------------------------------------------
	@GetMapping("/pendingcharges/{uid}")
	public Integer getallpendingchar(@PathVariable Integer uid) {
		Integer getsum=exseervice.findpendingpay(uid);
		return getsum;
	}
	

}
