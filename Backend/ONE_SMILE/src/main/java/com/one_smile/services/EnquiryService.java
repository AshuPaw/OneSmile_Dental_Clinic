package com.one_smile.services;


import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.one_smile.entity.Enquiry_table;
import com.one_smile.repositiry.EnquireRepository;

@Service
public class EnquiryService {

	@Autowired
	public EnquireRepository enqrepo;

	public Collection<Enquiry_table> getAllEnquiry() {
		Collection<Enquiry_table> et = enqrepo.findAll();
		return et;
	}

	public Enquiry_table getOneEnquiry(Integer id) {
		Enquiry_table foundEnquiry = null;
		Optional<Enquiry_table> getOneEnquiry = enqrepo.findById(id);
		if (!getOneEnquiry.isEmpty()) {
			foundEnquiry = getOneEnquiry.get();
		}
		return foundEnquiry;
	}

	public Enquiry_table updEnquiry(Enquiry_table oldenq, Enquiry_table newenq) {
		oldenq.setStatus(newenq.getStatus());
		enqrepo.save(oldenq);
		return oldenq;
	}

	public Enquiry_table addEnquiry(Enquiry_table app) {

		return enqrepo.save(app);
	}

}
