import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

userLogged: boolean= false;
name: String = '';
  constructor() { }

isUserLogged(){
  return {logged: this.userLogged, name: this.name};
}
loginUser(username: String, pass: String){
  let user = null;
  if(username == "admin@gmail.com" && pass == "1234567890"){
    user = {name: 'Administrator', age: 23, email:username};
    this.name='Administrator';
    this.userLogged = true;
    return user;
  }else{
    return user;
  }
}
}
