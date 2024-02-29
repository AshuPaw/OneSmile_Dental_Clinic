package com.one_smile.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.one_smile.entity.Feedback;
import com.one_smile.services.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService fbService;

	@GetMapping("/allfeedback")
	public Collection<Feedback> getAllFB() {
		Collection<Feedback> allFB = fbService.getAllFeedback();
		return allFB;
	}

	@PostMapping("/addfeedback")
	public Feedback addFB(@RequestBody Feedback fb) {
		// TODO: process POST request
		return fbService.addFeedback(fb);
	}
	// http://localhost:8087/feedback/allfeedback
	// http://localhost:8087/feedback/addfeedback
}