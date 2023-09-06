import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-employers',
  templateUrl: './register-employers.component.html',
  styleUrls: ['./register-employers.component.css']
})
export class RegisterEmployersComponent {
  username: string ="";
  email: string ="";
  phone: string ="";
  password: string ="";
  passwordcf : string ='';
  companyname : String ='';
  adress : string='';
  city: String='';

  constructor(private http: HttpClient )
  {

  }
  save()
  {
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "phone" : this.phone,
      "password" : this.password,
      "passwordcf":this.passwordcf,
      "companyname ":this.companyname,
      "adress": this.adress,
      "city":this.city

    };
    this.http.post("http://localhost:8080/employers/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Registered Successfully");
    });
  }
}
