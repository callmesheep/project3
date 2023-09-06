import { Component, OnInit } from '@angular/core';


class recruiment{
  position!: String;
  career!: String;
  salary!: String;
  deadline!: String;
  description!: String;
  request!: String;
  interst!: String;
  company!: string;
  thumbnail!: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recruitments: recruiment[]  =[{
    position:'Solution Architects',
    career:' Java',
    salary:'15',
    deadline:'33/12/2022',
    description:'',
    request:'',
    interst:'',
    company:'Fpt Software',
    thumbnail:'assets/img/fpt-logo.png'

  },
  {
    position:'Solution Architects',
    career:' Java',
    salary:'15',
    deadline:'33/12/2022',
    description:'',
    request:'',
    interst:'',
    company:'Fpt Software',
    thumbnail:'assets/img/fpt-logo.png'

  }
,
{
  position:'Solution Architects',
  career:' Java',
  salary:'15',
  deadline:'33/12/2022',
  description:'',
  request:'',
  interst:'',
  company:'Fpt Software',
  thumbnail:'assets/img/fpt-logo.png'

},
{
  position:'Solution Architects',
  career:' Java',
  salary:'15',
  deadline:'33/12/2022',
  description:'',
  request:'',
  interst:'',
  company:'Fpt Software',
  thumbnail:'assets/img/fpt-logo.png'

},
{
  position:'Solution Architects',
  career:' Java',
  salary:'15',
  deadline:'33/12/2022',
  description:'',
  request:'',
  interst:'',
  company:'Fpt Software',
  thumbnail:'assets/img/fpt-logo.png'

},
{
  position:'Solution Architects',
  career:' Java',
  salary:'15',
  deadline:'33/12/2022',
  description:'',
  request:'',
  interst:'',
  company:'Fpt Software',
  thumbnail:'assets/img/fpt-logo.png'

}
]
  constructor(){}
ngOnInit() {
    
}

}
