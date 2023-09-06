import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent { username: string ="";
email: string ="";
phone: string ="";
password: string ="";
passwordcf : string ='';
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
    " passwordcf":this.passwordcf
  };
  this.http.post("http://localhost:8080/user/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("user Registered Successfully");
  });
}


}
