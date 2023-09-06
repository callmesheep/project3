import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-employers',
  templateUrl: './login-employers.component.html',
  styleUrls: ['./login-employers.component.css']
})
export class LoginEmployersComponent {
  email: string ="";
  password: string ="";
  constructor(private router: Router,private http: HttpClient) {}

  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:8080/employers/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/job');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
}

}
