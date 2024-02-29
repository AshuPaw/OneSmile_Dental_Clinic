package com.one_smile.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.one_smile.entity.Examinations;

public interface ExaminationRepository extends JpaRepository<Examinations, Integer> {
	
	@Query( 
	        nativeQuery = true, 
	        value= "SELECT sum(e.charges) AS pending_charges FROM examinations e JOIN payments p ON e.eid = p.exam_id JOIN appointments a ON e.app_id = a.app_id WHERE p.pay_status = 'pending' AND a.uid =:userid") 
	      Integer findpendingpayments(@Param("userid") Integer userid); 
	
}
