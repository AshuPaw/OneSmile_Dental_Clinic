package com.one_smile.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Enquiry_table {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer enqid;

	String name;
	String email;
	long mobile_no;
	String message;
	String status;

	public Enquiry_table() {
		// TODO Auto-generated constructor stub
	}

	public Enquiry_table(Integer enqid, String name, String email, long mobile_no, String message, String status) {
		super();
		this.enqid = enqid;
		this.name = name;
		this.email = email;
		this.mobile_no = mobile_no;
		this.message = message;
		this.status = status;
	}

	public Integer getEnqid() {
		return enqid;
	}

	public void setEnqid(Integer enqid) {
		this.enqid = enqid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Enquiry_table [enqid=" + enqid + ", name=" + name + ", email=" + email + ", mobile_no=" + mobile_no
				+ ", message=" + message + ", status=" + status + "]";
	}

	

}

