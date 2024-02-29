package com.one_smile.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Examinations {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer eid;
	
	@OneToOne
	@JoinColumn(name="App_id")
	private Appointments appointments;
	
	String treatment_name;
	
	String treatment_notes;
	
	int charges;
	
    String paymentstatus;
	
	public Examinations() {
		// TODO Auto-generated constructor stub
	}

	public Examinations(Integer eid, Appointments appointments, String treatment_name, String treatment_notes,
			int charges, String paymentstatus) {
		super();
		this.eid = eid;
		this.appointments = appointments;
		this.treatment_name = treatment_name;
		this.treatment_notes = treatment_notes;
		this.charges = charges;
		this.paymentstatus = paymentstatus;
	}

	public Integer getEid() {
		return eid;
	}

	public void setEid(Integer eid) {
		this.eid = eid;
	}

	public Appointments getAppointments() {
		return appointments;
	}

	public void setAppointments(Appointments appointments) {
		this.appointments = appointments;
	}

	public String getTreatment_name() {
		return treatment_name;
	}

	public void setTreatment_name(String treatment_name) {
		this.treatment_name = treatment_name;
	}

	public String getTreatment_notes() {
		return treatment_notes;
	}

	public void setTreatment_notes(String treatment_notes) {
		this.treatment_notes = treatment_notes;
	}

	public int getCharges() {
		return charges;
	}

	public void setCharges(int charges) {
		this.charges = charges;
	}

	public String getPaymentstatus() {
		return paymentstatus;
	}

	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}

	@Override
	public String toString() {
		return "Examinations [eid=" + eid + ", appointments=" + appointments + ", treatment_name=" + treatment_name
				+ ", treatment_notes=" + treatment_notes + ", charges=" + charges + ", paymentstatus=" + paymentstatus
				+ "]";
	}

	
	
}
