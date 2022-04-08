package io.spring.fruitcrushbackend.model;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productName;
    private int price;
    private int quantity;
    private String username;

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
public String getProductName() {
    return productName;
}
public void setProductName(String productName) {
    this.productName = productName;
}

public int getprice() {
    return price;
}
public void setprice(int price) {
    this.price = price;
}
public int getquantity() {
    return quantity;
}
public void setquantity(int quantity) {
    this.quantity = quantity;
}
}
