package com.one_smile.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.User_role;
import com.one_smile.entity.User_table;
import com.one_smile.services.LoginService;
import com.one_smile.services.UserService;

import Exceptions.EnquiryExceptions;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private UserService userService;
	
	private User_role userrole;
	
	@Autowired
	private LoginService loginservice;
	
	@GetMapping("/alluser")
	public Collection<User_table> getalluser(){
		
		Collection<User_table> allUsers= userService.getAllUsers();
		return allUsers;
	}
	
	@PostMapping("/adduser")
	public User_table addusers(@RequestBody User_table us) {
		//TODO: process POST request
		 if (us.getRole() == null) {
		        us.setRole(userrole.patient);
		    }
		return userService.adduser(us);
	}
	
	@PutMapping("/updateuserpass/{email}")
	public User_table updatePassword(@PathVariable String email, @RequestBody User_table updatedUser) {
		User_table existuser = userService.getuserbyemail(email);
		
		
		return userService.updatepassword(existuser, updatedUser);
	
	}
	
	@GetMapping("/oneuser/{id}")
	public User_table getOneUser (@PathVariable Integer id) {
		User_table foundUser = userService.getOneuser(id);
		if (foundUser == null)
		{
			EnquiryExceptions exp = new EnquiryExceptions("User Does not exits");
			throw exp;
		}
		return foundUser;
	}
	
	@PostMapping("/adddoctor")
	public User_table adddoctor(@RequestBody User_table us) {
		//TODO: process POST request
		 if (us.getRole() == null) {
		        us.setRole(userrole.doctor);
		    }
		 us.setPassword(encoder.encode(us.getPassword()));
		return userService.adduser(us);
	}
	
	
	@PostMapping("/authuser")
	public ResponseEntity<User_table> authuser(@RequestBody User_table usera) {
		
	return	loginservice.Authuser(usera);
		
	}
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable int id) {
		return userService.deleteUser(id);
	}
	
	
	
	
	
}
