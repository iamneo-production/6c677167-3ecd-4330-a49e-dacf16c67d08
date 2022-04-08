package io.spring.fruitcrushbackend.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.User;
import io.spring.fruitcrushbackend.service.RegistrationService;



@RestController
@CrossOrigin()
public class RegistrationController {
    @Autowired
    private RegistrationService service;
	@RequestMapping
	@GetMapping("/")
	public Boolean loginUser(@RequestBody User user) throws Exception {
		User tempUser = null ;
		String tempEmail = user.getEmailId();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser!=null){	
				if((tempUser.getRole()!=null) &&(tempUser.getPassword().equals(tempPass) && tempUser.getRole().equals("user"))){
					tempUser.setActive(true);
					setActivestate(tempUser);
					return true;
				}
				return false;
			}
		}
		return false;
	}
    @PostMapping("/admin/login")
	public Boolean loginAdmin(@RequestBody User user){
		User tempUser = null ;
		String tempEmail = user.getEmailId();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser!=null){	
				if((tempUser.getRole()!=null) &&(tempUser.getPassword().equals(tempPass) && tempUser.getRole().equals("admin"))){
					tempUser.setActive(true);
					setActivestate(tempUser);
					return true;
				}
				return false;
			}
		}
		return false;
	}
    @PostMapping("/signup")
	public Boolean registeredUser(@RequestBody User user) {
		String tempmail = user.getEmailId();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				return false;
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
	@PostMapping("/admin/signup")
	public Boolean registeredAdmin(@RequestBody User user) throws Exception {
		String tempmail = user.getEmailId();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				throw new Exception("User "+ tempmail +" Already Found, Can't Register");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
	@PutMapping
	public void setActivestate(@RequestBody User user){
		if(service.updateData(user)!=null){
			System.out.print("Done");
		}
		else{
			System.out.print("bad");
		}
	}
	@PostMapping("/logout")
	public Boolean logout(@RequestBody String userName){
		User tmpUser=null;
		tmpUser = service.fetchUserByEmail(userName);
		if(tmpUser!=null){
			tmpUser.setActive(false);
			setActivestate(tmpUser);
			return true;
		}
		return false;
	}
	@GetMapping("/admin/users")
	public List<User> listUser(){
		return service.allUser();
	}
	@PostMapping("/admin/editUser")
	public Boolean editUser(@RequestBody User user){
		if(service.updateData(user)!=null){
			return true;
		}
		return false;
	}
    @PostMapping("/admin/deleteUser")
	public Boolean deleteUser(@RequestBody String email) { 
		User tempUser = service.fetchUserByEmail(email);
		service.deleteUser(tempUser.getId());
		return true;
	}
	@PostMapping("/type")
	public String typeofUser(@RequestBody String email){
		User tempUser = service.fetchUserByEmail(email);
		String role=tempUser.getRole();
		return role;
	}
}
