package com.one_smile.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.TableGenerator;

@Entity
@Component
@TableGenerator(pkColumnName = "payid", initialValue = 12345, allocationSize = 1, name = "xxx")
public class Payments {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "xxx")
	private Integer paymentId;

	@OneToOne
	@JoinColumn(name = "Exam_ID")
	private Examinations examinations;

	private String payStatus;

	private int charges;

	public Payments() {
		// TODO Auto-generated constructor stub
	}

	public Payments(Integer paymentId, Examinations examinations, String payStatus, int charges) {
		super();
		this.paymentId = paymentId;
		this.examinations = examinations;
		this.payStatus = payStatus;
		this.charges = charges;
	}

	public Integer getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Integer paymentId) {
		this.paymentId = paymentId;
	}

	public int getCharges() {
		return charges;
	}

	public void setCharges(int charges) {
		this.charges = charges;
	}

	public Examinations getExaminations() {
		return examinations;
	}

	public void setExaminations(Examinations examinations) {
		this.examinations = examinations;
	}

	public String getPayStatus() {
		return payStatus;
	}

	public void setPayStatus(String payStatus) {
		this.payStatus = payStatus;
	}

	@Override
	public String toString() {
		return "Payments [paymentId=" + paymentId + ", examinations=" + examinations + ", payStatus=" + payStatus
				+ ", charges=" + charges + "]";
	}

}