import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:8080"
  product:Product=new Product();
  constructor(private http: HttpClient) { }
  viewProduct(){
    return this.http.get(`${this.url+"/admin/viewProduct"}`);
  }
  addCart(cart:Cart):Observable<object>{
    return this.http.post<object>(`${this.url+"/addCart"}`,cart);
  }
  countChecker(username:string):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/count"}`,username);
  }
  ViewCart(){
    return this.http.get(`${this.url+"/viewCart"}`);
  }
  ViewOrder(username:String){
    return this.http.post(`${this.url+"/viewMyorder"}`,username);
  }
  addOrder(orders:Cart[]):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/addMyorder"}`,orders);
  }
  deleteCart(username:String):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/delete"}`,username);;
  }
  allOrder(){
    return this.http.get(`${this.url+"/admin/orders"}`);
  }
  addProduct(product:Product):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/admin/addProduct"}`,product);
  }
  deleteProduct(id:Number):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/admin/deleteProduct"}`,id);
  }
  updateProduct(product:Product):Observable<object>{
    return this.http.post<Object>(`${this.url+"/admin/updateProduct"}`,product);
  }
}
