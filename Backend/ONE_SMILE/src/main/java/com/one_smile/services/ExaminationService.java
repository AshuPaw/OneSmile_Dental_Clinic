package com.one_smile.services;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Examinations;
import com.one_smile.repositiry.ExaminationRepository;

@Service
public class ExaminationService {
	
	@Autowired
	private ExaminationRepository examrepo;
	
	public Collection<Examinations> getallexamination()
	{	
		Collection<Examinations> ex= examrepo.findAll();
		return ex;
	}
	
   public Examinations addexamination(Examinations examin ) {
		return examrepo.save(examin);
	}
   
   public Examinations getOneexamination(Integer id) {
	   Examinations foundExmination = null;
		Optional<Examinations> getOneAppointments = examrepo.findById(id);
		if (!getOneAppointments.isEmpty())
			foundExmination = getOneAppointments.get();
		
		System.out.println(foundExmination);
	    
		return foundExmination;
	   
   }
   
   public Integer  findpendingpay(Integer uid) { 
       Integer sum = examrepo.findpendingpayments(uid); 
       return sum; 
   } 
   
   
}
