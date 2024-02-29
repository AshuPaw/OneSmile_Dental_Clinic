package com.one_smile.services;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.one_smile.entity.Appointments;
import com.one_smile.entity.User_table;
import com.one_smile.repositiry.UserRepository;

import Exceptions.UserHandlingException;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PasswordEncoder encoder;

	public Collection<User_table> getAllUsers() {

		Collection<User_table> allUsers = userRepo.findAll();
		return allUsers;
	}

	public User_table adduser(User_table user) {
		user.setPassword(encoder.encode(user.getPassword()));
		return userRepo.save(user);
	}

	public User_table updatepassword(User_table olduser, User_table newuser) {

		olduser.setPassword(encoder.encode(newuser.getPassword()));
		userRepo.save(olduser);
		return olduser;
	}

	public User_table getOneuser(Integer id) {
		User_table founduser = null;
		Optional<User_table> getOneuser = userRepo.findById(id);
		if (!getOneuser.isEmpty())
			founduser = getOneuser.get();
		return founduser;
	}

	public User_table getuserbyemail(String s) {

		try {
			return userRepo.findByEmail(s);
		} catch (Exception e) {
			throw new UserHandlingException("email not found");
		}

	}
	public String deleteUser(int id) {	
		userRepo.deleteById(id);
		return "Record From Id : "+id+" is Deleted";
	}

}
