package io.spring.fruitcrushbackend.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productName;
    private int price;
    private int quantity;
    private String ImageUrl;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
public String getProductName() {
    return productName;
}
public void setProductName(String productName) {
    this.productName = productName;
}

public String getImageUrl() {
    return ImageUrl;
}
public void setImageUrl(String imageUrl) {
    ImageUrl = imageUrl;
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