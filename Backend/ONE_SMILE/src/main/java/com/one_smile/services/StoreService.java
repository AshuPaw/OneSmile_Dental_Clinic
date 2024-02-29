package com.one_smile.services;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.Payments;
import com.one_smile.entity.Store;
import com.one_smile.repositiry.StoreRepository;

@Service
public class StoreService {

@Autowired
private StoreRepository storerepo;

public Collection<Store> getAllStore(){
	
	Collection<Store> allstore = storerepo.findAll();
	return allstore;
}

public Store addstore(Store newsto) {
	return storerepo.save(newsto);
}

public Store updatequantity(Store oldsto,Store newsto) {
	oldsto.setQuantity(newsto.getQuantity());
	storerepo.save(oldsto);
	return oldsto;
	
}
public Store getOneProduct(Integer productId) {
	Store foundstore = null;
	Optional<Store> getOnestore = storerepo.findById(productId);
	if (!getOnestore.isEmpty())
		foundstore = getOnestore.get();
	System.out.println(foundstore);
	return foundstore;
}

public Store updatestore(Store oldstore,Store newstore) {
	
	Integer qnt=oldstore.getQuantity()-newstore.getQuantity();
	oldstore.setQuantity(qnt);
	storerepo.save(oldstore);
	
	
	return oldstore;
	
}
public void savestatus(Store newst) {
	storerepo.save(newst);
	
}

}
