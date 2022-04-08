package io.spring.fruitcrushbackend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.Product;
import io.spring.fruitcrushbackend.service.ProductService;



@RestController
@CrossOrigin()
public class ProductController {
    @Autowired
	private ProductService service;
    @PostMapping("admin/addProduct")
	public Product addProduct(@RequestBody Product product) {
		return service.saveProduct(product);
	}
	
	@GetMapping("admin/viewProduct")
	public List<Product> findProduct(){
		return service.showProduct();
	}
	
	@PostMapping("/admin/updateProduct")
	public Product updateProduct(@RequestBody Product product){
		return service.updateProduct(product);
	}
	
    @PostMapping("/admin/deleteProduct")
	public Boolean deleteProduct(@RequestBody Integer id) { 
		service.deleteProduct(id);
		return true;
	}
}
