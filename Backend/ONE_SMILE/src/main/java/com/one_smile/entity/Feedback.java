package com.one_smile.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer fid;
	Integer ratings;
	String message;
	
	@ManyToOne
	@JoinColumn(name="uid")
	private User_table usertable;
	
	public Feedback() {
		// TODO Auto-generated constructor stub
	}

	public Feedback(Integer fid, Integer ratings, String message, User_table usertable) {
		super();
		this.fid = fid;
		this.ratings = ratings;
		this.message = message;
		this.usertable = usertable;
	}

	public Integer getFid() {
		return fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
	}

	public Integer getRatings() {
		return ratings;
	}

	public void setRatings(Integer ratings) {
		this.ratings = ratings;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public User_table getUsertable() {
		return usertable;
	}

	public void setUsertable(User_table usertable) {
		this.usertable = usertable;
	}

	@Override
	public String toString() {
		return "Feedback [fid=" + fid + ", ratings=" + ratings + ", message=" + message + ", usertable=" + usertable
				+ "]";
	}
	
}