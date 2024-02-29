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

import com.one_smile.entity.Payments;
import com.one_smile.entity.Store;
import com.one_smile.entity.User_table;
import com.one_smile.services.StoreService;

@CrossOrigin
@RestController
@RequestMapping("/store")
public class StoreController {

	@Autowired
	private StoreService sto;
	

	@GetMapping("/allstore")
	public Collection<Store> getallstore(){
		
		Collection<Store> allstore= sto.getAllStore();
		return allstore;
	}
	
	
	@PostMapping("/addstore")
	public Store addusers(@RequestBody Store newstore) {
		
		return sto.addstore(newstore);
	}
	
	

	
	@PutMapping("/updateqnt/{productId}")
	public Store updateqnt(@PathVariable Integer productId, @RequestBody Store newsto) {
		Store oldstore= sto.getOneProduct(productId);
		
		return sto.updatestore(oldstore, newsto);
		
	}
}
