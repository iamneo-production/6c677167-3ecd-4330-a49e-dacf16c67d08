package io.spring.fruitcrushbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.Order;
import io.spring.fruitcrushbackend.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {
    @Autowired
	private OrderService service;
    @PostMapping("/addMyorder")
	public Boolean addCart(@RequestBody List<Order> order) {
        if(service.saveCart(order)!=null){
            System.out.print("true");
            return true;
        }
        System.out.print("false");
		return false;
	}
    @GetMapping("/admin/orders")
	public List<Order> listOrder(){
		return service.showCart();
	}
    @PostMapping("/viewMyorder")
	public List<Order> listuserOrder(@RequestBody String username){
		return service.showuserOrder(username);
	}
}
