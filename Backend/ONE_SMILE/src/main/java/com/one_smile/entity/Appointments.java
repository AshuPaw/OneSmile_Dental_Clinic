package com.one_smile.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Component
@Entity
public class Appointments {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer App_id;
	LocalDate date;
	LocalTime time;
	String notes;
	

	@ManyToOne
	@JoinColumn(name="uid")
	private User_table usertable;
	
	String status;
	
	
	
	public Appointments() {
		// TODO Auto-generated constructor stub
	}



	public Appointments(Integer app_id, LocalDate date, LocalTime time, String notes, User_table usertable,
			String status) {
		super();
		App_id = app_id;
		this.date = date;
		this.time = time;
		this.notes = notes;
		this.usertable = usertable;
		this.status = status;
	}



	public Integer getApp_id() {
		return App_id;
	}



	public void setApp_id(Integer app_id) {
		App_id = app_id;
	}



	public LocalDate getDate() {
		return date;
	}



	public void setDate(LocalDate date) {
		this.date = date;
	}



	public LocalTime getTime() {
		return time;
	}



	public void setTime(LocalTime time) {
		this.time = time;
	}



	public String getNotes() {
		return notes;
	}



	public void setNotes(String notes) {
		this.notes = notes;
	}



	public User_table getUsertable() {
		return usertable;
	}



	public void setUsertable(User_table usertable) {
		this.usertable = usertable;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	@Override
	public String toString() {
		return "Appointments [App_id=" + App_id + ", date=" + date + ", time=" + time + ", notes=" + notes
				+ ", usertable=" + usertable + ", status=" + status + "]";
	}



	
	

}
