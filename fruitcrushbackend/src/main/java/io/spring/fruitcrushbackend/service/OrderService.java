package io.spring.fruitcrushbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.spring.fruitcrushbackend.model.Order;
import io.spring.fruitcrushbackend.repository.OrderRespository;
@Service
public class OrderService {
    @Autowired
    private OrderRespository repository;
    public List<Order> saveCart(List<Order> order) {
		return repository.saveAll(order);
	}
    public List<Order> showCart() {
		return repository.findAll();
	}
    public List<Order> showuserOrder(String username) {
		return repository.finduserOrder(username);
	}
}
