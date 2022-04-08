package io.spring.fruitcrushbackend.repository;
import io.spring.fruitcrushbackend.model.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRespository extends JpaRepository<Order, Integer> {
    @Query(
  value = "SELECT * FROM Orderdetails WHERE username =?1", 
  nativeQuery = true)
    public List<Order> finduserOrder(String username);
}
