package com.one_smile.services;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Examinations;
import com.one_smile.entity.Requisition;
import com.one_smile.entity.Store;
import com.one_smile.repositiry.RequisitionRepository;

@Service
public class RequistionService {
	
	@Autowired
	private RequisitionRepository reqRepo;
	
	@Autowired
	private StoreService storeService;
	
	
	public Requisition getOnereq(Integer id) {
		Requisition foundreq = null;
		Optional<Requisition> getOnereq = reqRepo.findById(id);
		if (!getOnereq.isEmpty())
			foundreq = getOnereq.get();
		return foundreq;
	}
	
	public Collection<Requisition> getallReq()
	{	
		Collection<Requisition> ex= reqRepo.findAll();
		return ex;
	}
	
   public Requisition addReq(Requisition req ) {
		return reqRepo.save(req);
	}
   
   public Requisition updatereq(Requisition oldreq, Requisition newreq) {
	   oldreq.setStatus(newreq.getStatus());
	   
	   System.out.println("new qnt"+newreq.getQuantity());
	   System.out.println("this is qnt"+oldreq.getQuantity());
	   
	  System.out.println("product id"+oldreq.getStore().getProductId());
	  
	  Store s1= new Store();
	  s1.setProductId(oldreq.getStore().getProductId());
	  s1.setQuantity(newreq.getQuantity());
	  s1.setProductName(oldreq.getStore().getProductName());
	  s1.setStatus(oldreq.getStore().getStatus());
	  storeService.savestatus(s1);
	   
	   System.out.println(s1.toString());
	   
	   
	   reqRepo.save(oldreq);
	   
		
		return oldreq;
		
	}
   
   
   

}
