package io.spring.fruitcrushbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.spring.fruitcrushbackend.model.Product;



public interface ProductRepository extends JpaRepository<Product, Integer> {

}
