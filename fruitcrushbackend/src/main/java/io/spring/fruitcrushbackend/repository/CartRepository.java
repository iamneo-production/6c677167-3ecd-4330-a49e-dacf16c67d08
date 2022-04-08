package io.spring.fruitcrushbackend.repository;
import io.spring.fruitcrushbackend.model.Cart;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
public interface CartRepository extends JpaRepository<Cart, Integer> {
    @Query("SELECT COUNT(*) FROM Cart WHERE username=?1")
    long cartcount(String username);
    @Modifying
    @Transactional
    @Query("DELETE FROM Cart WHERE username=?1")
    int deleteCart(String username);
}
