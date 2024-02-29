package com.one_smile.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.TableGenerator;

@Entity
@TableGenerator(pkColumnName = "productId", initialValue = 111111, allocationSize = 1, name = "xyz")
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "xyz")
	Integer productId;
	
	String productName;
	
	int quantity;
	
	String status;

	
	public Store() {
		// TODO Auto-generated constructor stub
	}
	public Store(Integer productId, String productName, int quantity, String status) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.quantity = quantity;
		this.status = status;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
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
		return "Store [productId=" + productId + ", productName=" + productName + ", quantity=" + quantity + ", status="
				+ status + "]";
	}
	
	
	
	
	
	
}
