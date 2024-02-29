package com.one_smile.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.Enquiry_table;
import com.one_smile.entity.Requisition;
import com.one_smile.entity.Store;
import com.one_smile.services.RequistionService;
import com.one_smile.services.StoreService;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin
@RestController
@RequestMapping("/Requisition")
public class RequisitionController {

	@Autowired
	private RequistionService reqSer;
	private StoreService storeser;

	@GetMapping("/allreq")
	public Collection<Requisition> getEngurie() {
		Collection<Requisition> allReq = reqSer.getallReq();
		return allReq;
	}

	@PostMapping("/addreq")
	public Requisition addreq(@RequestBody Requisition req) {
		req.setStatus("Pending");
		return reqSer.addReq(req);
	}
	
	@PutMapping("/updatereq/{reqid}")
	public Requisition updatereq(@PathVariable Integer reqid, @RequestBody Requisition newreq) {
		
		Requisition oldreq = reqSer.getOnereq(reqid);
		 Requisition updated=reqSer.updatereq(oldreq, newreq);
		 
		 
		 
		 System.out.println(newreq.toString());
	 
		 
		return updated; 
		
	}

}
