import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080"
  constructor(private http: HttpClient) { }
  addUser(users?:User):Observable<object>{
    return this.http.post<Object>(`${this.url+"/signup"}`,users);
  }
  addadminUser(users?:User):Observable<object>{
    return this.http.post<Object>(`${this.url+"/admin/signup"}`,users);
  }
  authuser(users?:User):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url}`,users);
  }
  authadminuser(users?:User):Observable<Boolean>{
    console.log(`${this.url}`)
    return this.http.post<Boolean>(`${this.url+"/admin/login"}`,users);
  }
  logout(user?:String):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.url+"/logout"}`,user);
  }
  findall(){
    return this.http.get(`${this.url+"/admin/users"}`);
  }
  updateUser(users?:User):Observable<object>{
    return this.http.post<Object>(`${this.url+"/admin/editUser"}`,users);
  }
  deleteElement(emailId?:String):Observable<object>{
    return this.http.post<Object>(`${this.url+"/admin/deleteUser"}`,emailId);
  }
  typeofUser(emailId?:String):Observable<any>{
    return this.http.post(`${this.url+"/type"}`,emailId,{responseType: 'text' });
  }
}
