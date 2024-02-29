package com.one_smile.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.one_smile.entity.Requisition;

public interface RequisitionRepository extends JpaRepository<Requisition,Integer> {

}
