package com.one_smile.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Requisition {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer reqId;
	
	@OneToOne
	@JoinColumn(name="Product_ID")
	private Store store;
	
	int quantity;
	
	String status;
	
	public Requisition() {
		// TODO Auto-generated constructor stub
	}

	public Requisition(Integer reqId, Store store, int quantity, String status) {
		super();
		this.reqId = reqId;
		this.store = store;
		this.quantity = quantity;
		this.status = status;
	}

	public Integer getReqId() {
		return reqId;
	}

	public void setReqId(Integer reqId) {
		this.reqId = reqId;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Requisition [reqId=" + reqId + ", store=" + store + ", quantity=" + quantity + ", status=" + status
				+ "]";
	}
	
	
	
	

}
