package com.one_smile.repositiry;
import org.springframework.data.jpa.repository.JpaRepository;
import com.one_smile.entity.Payments;

public interface PaymentsRepository extends JpaRepository<Payments, Integer> {

}
