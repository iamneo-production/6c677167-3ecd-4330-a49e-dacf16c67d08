package io.spring.fruitcrushbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.spring.fruitcrushbackend.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{
    public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String email, String password);

}
