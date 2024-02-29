package com.one_smile.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.one_smile.entity.Feedback;
import com.one_smile.repositiry.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepo;

	public Collection<Feedback> getAllFeedback() {
		Collection<Feedback> fb = feedbackRepo.findAll();
		return fb;
	}

	public Feedback addFeedback(Feedback fb) {
		return feedbackRepo.save(fb);
	}
}