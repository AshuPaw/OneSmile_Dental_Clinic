package com.one_smile.services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.one_smile.entity.User_table;
import com.one_smile.repositiry.UserRepository;

@Service
public class LoginService {

	@Autowired 
	private UserRepository userrepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	
	public ResponseEntity<User_table> Authuser(User_table userch) {
		
		User_table dbUser= userrepo.findByUname(userch.getUname()); 
		System.out.println(dbUser);
	
		
		 if(dbUser != null) {
			System.out.println(dbUser.getPassword());
			if(bCryptPasswordEncoder.matches(userch.getPassword(), dbUser.getPassword())) {
				return ResponseEntity.ok(dbUser);
			}else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
			}
		}
		return ResponseEntity.notFound().build();
		
	}
	
}
