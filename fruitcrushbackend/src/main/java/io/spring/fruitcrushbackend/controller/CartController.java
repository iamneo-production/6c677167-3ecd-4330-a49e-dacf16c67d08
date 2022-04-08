package io.spring.fruitcrushbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.Cart;
import io.spring.fruitcrushbackend.service.CartService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
    @Autowired
	private CartService service;
    @PostMapping("/addCart")
	public Cart addCart(@RequestBody Cart cart) {
		return service.saveCart(cart);
	}
    @GetMapping("/viewCart")
	public List<Cart> listCart(){
		return service.showCart();
	}
    @PostMapping("/count")
    public Boolean CountChecker(@RequestBody String username){
        long c=service.countCart(username);
        if(c<5){
            System.out.print("true");
            return true;
        }
        System.out.print("false");
        return false;
    }
    @PostMapping("/delete")
    public Boolean DeleteTable(@RequestBody String username){
        if(service.deleteCart(username)){
            return true;
        }
        return false;
    }
}
