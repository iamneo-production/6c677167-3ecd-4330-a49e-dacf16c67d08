package io.spring.fruitcrushbackend.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.spring.fruitcrushbackend.model.User;
import io.spring.fruitcrushbackend.repository.RegistrationRepository;

@Service
public class RegistrationService {
    @Autowired
    private RegistrationRepository repository;
    public User saveUser(User user) {
		return repository.save(user);
	}
	
	public User fetchUserByEmail(String email) {
		return repository.findByEmailId(email);
	}
	
	public User fetchUserByEmailAndPassword(String email, String password) {
		return repository.findByEmailIdAndPassword(email,password);
	}
	
	public void deleteUser(int id) {
		repository.deleteById(id);
	}

    public User updateData(User user) {
		User existingUser = repository.findById(user.getId()).orElse(null);
		existingUser.setUserName(user.getUserName());
		existingUser.setEmailId(user.getEmailId());
		existingUser.setMobileNo(user.getMobileNo());
		existingUser.setPassword(user.getPassword());
		existingUser.setRole(user.getRole());
		existingUser.setActive(user.getActive());
		return repository.save(existingUser);
    }
	public List<User> allUser(){
		return repository.findAll();
	}
}
