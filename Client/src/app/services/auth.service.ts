import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtModule } from '@auth0/angular-jwt';
import { Admin } from 'src/app/services/menumodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedAdmin: Admin;

  authToken: any;
  admin: any;
  options;
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http:Http) { }


authenticateAdmin(admin){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/users/authenticate', admin,{headers: headers})
  .pipe(map((response: any) => response.json()));
}



storeAdminData(token, admin){
  localStorage.setItem('id_token', token);
  localStorage.setItem('admin', JSON.stringify(admin));
  this.authToken = token;
  this.admin = admin;
}

loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token; 
}

 loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

logout() {
  this.authToken = null;
  this.admin = null;
  localStorage.clear();
}
getAdmin() {

  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/users/profile', {headers: headers})
  .pipe(map((response: any) => response.json()));
}
putAdmin(admin: Admin) {
  return this.http.put(this.baseURL + `/${admin._id}`, admin);

}

}
