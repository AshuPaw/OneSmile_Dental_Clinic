package com.one_smile.repositiry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.one_smile.entity.Appointments;

public interface AppointmentRepository extends JpaRepository<Appointments, Integer> {
	

}
