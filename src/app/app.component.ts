import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDataComponent } from "./user-data/user-data.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDataComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resuablecompt';

  userData =[
    {name:'Kaleem', email:'kaleem33434@gmail.com',phone:923343353430},
    {name:'Sami', email:'sami90@gmail.com',phone:8234343544},

    {name:'Noman', email:'noman@gmail.com',phone:9134343434},
    {name:'John', email:'john@gmail.com',phone:18734343434},
    {name:'Smith', email:'smith@gmail.com',phone:1766454545},
    {name:'Hashir', email:'hashir@gmail.com',phone:9025678900},
  ];
}
