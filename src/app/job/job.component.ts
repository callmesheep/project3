import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit  {
  
  constructor(private http: HttpClient){}
  
  aplly(){



  }
ngOnInit() {
    
}
}

