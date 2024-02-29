package com.one_smile.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.one_smile.entity.Store;

public interface StoreRepository  extends JpaRepository<Store, Integer>{

}
