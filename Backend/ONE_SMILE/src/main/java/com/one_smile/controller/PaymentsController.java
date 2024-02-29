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
import com.one_smile.entity.Examinations;
import com.one_smile.entity.Payments;
import com.one_smile.services.ExaminationService;
import com.one_smile.services.PaymentsService;

@CrossOrigin
@RestController
@RequestMapping("/payments")
public class PaymentsController {

	@Autowired
	private PaymentsService paySer;

	@Autowired
	private ExaminationService examinations;

	@GetMapping("/allpayments")
	public Collection<Payments> getalluser() {
		Collection<Payments> allpayments = paySer.getallpayments();
		return allpayments;
	}

	@PostMapping("/addpayments")
	public Payments addpayments(@RequestBody Payments ex) {
		return paySer.addPayments(ex);

	}

	@PutMapping("/updatepayments/{paymentId}")
	public Payments updatePayments(@PathVariable Integer paymentId, @RequestBody Payments newpay) {
		Payments oldpay = paySer.getOnePayment(paymentId);
		return paySer.updatePayments(oldpay, newpay);
	}


}