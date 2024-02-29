package com.one_smile.entity;

public class MailStructure {
	
	public String subject;
	public String message;
	
	public MailStructure() {
		// TODO Auto-generated constructor stub
	}

	public MailStructure(String subject, String message) {
		super();
		this.subject = subject;
		this.message = message;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "MailStructure [subject=" + subject + ", message=" + message + "]";
	}
	
	

}