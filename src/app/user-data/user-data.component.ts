import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {

  constructor(){}

  @Input() item:{name:string,email:string,phone:number}={name:'',email:'',phone:0};
  ngOnInit(): void {
    
  }
}
