package com.one_smile.repositiry;


import org.springframework.data.jpa.repository.JpaRepository;

import com.one_smile.entity.Enquiry_table;

public interface EnquireRepository extends JpaRepository<Enquiry_table, Integer> {

}