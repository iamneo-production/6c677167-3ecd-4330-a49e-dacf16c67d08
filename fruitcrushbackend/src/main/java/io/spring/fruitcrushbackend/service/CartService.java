package io.spring.fruitcrushbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.spring.fruitcrushbackend.model.Cart;
import io.spring.fruitcrushbackend.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository repository;
    public Cart saveCart(Cart cart) {
		return repository.save(cart);
	}
    public List<Cart> showCart() {
		return repository.findAll();
	}
    public long countCart(String username){
        return repository.cartcount(username);
    }
    public Boolean deleteCart(String username){
        System.out.print(repository.deleteCart(username));
        return true;
    }
}
