package com.one_smile.services;


import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Examinations;
import com.one_smile.entity.Payments;
import com.one_smile.repositiry.PaymentsRepository;

@Service
public class PaymentsService {

	@Autowired
	private PaymentsRepository prepo;

	public Collection<Payments> getallpayments() {

		Collection<Payments> allpay = prepo.findAll();
		

		return allpay;
	}

	public Payments addPayments(Payments payApp) {
		
		return prepo.save(payApp);
	}

	public Payments updatePayments(Payments oldPay, Payments newPay) {
		oldPay.setPayStatus(newPay.getPayStatus());
		prepo.save(oldPay);
		return oldPay;
	}

	public Payments getOnePayment(Integer paymentId) {
		Payments foundPayment = null;
		Optional<Payments> getOnePayment = prepo.findById(paymentId);
		if (!getOnePayment.isEmpty())
			foundPayment = getOnePayment.get();
		System.out.println(foundPayment);
		return foundPayment;
	}
	
	

}
