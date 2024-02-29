package com.one_smile.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.one_smile.entity.MailStructure;

@Service
public class MailService {
	
	@Autowired
	private JavaMailSender mailsender;
	@Value("$(One_Smile_Hub)")
	private String fromMail;
	
   public void sendmail (String mail, MailStructure ms) {
	   SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
	   simpleMailMessage.setFrom(fromMail);
	   simpleMailMessage.setSubject(ms.getSubject());
	   simpleMailMessage.setText(ms.getMessage());
	   simpleMailMessage.setTo(mail);
	   
	   mailsender.send(simpleMailMessage);
	   
	   
   }
	
}