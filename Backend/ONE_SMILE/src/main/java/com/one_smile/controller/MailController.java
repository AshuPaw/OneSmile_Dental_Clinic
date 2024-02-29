package com.one_smile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.MailStructure;
import com.one_smile.services.MailService;


@CrossOrigin
@RestController
@RequestMapping("/Mail")
public class MailController {
	
	@Autowired
	public MailService email;
	
	@PostMapping("/send/{mail}")
	public String sendMail(@PathVariable String mail, @RequestBody MailStructure mailStructure) {
		email.sendmail(mail, mailStructure);
		return "Success";
		
	}

}