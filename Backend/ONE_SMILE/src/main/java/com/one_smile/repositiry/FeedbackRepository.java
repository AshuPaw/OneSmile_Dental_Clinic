package com.one_smile.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.one_smile.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
