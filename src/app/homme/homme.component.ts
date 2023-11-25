import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homme.component.html',
  styleUrl: './homme.component.css',
})
export class HommeComponent {
  hommeItems = [
    {id:"1", title: "T-SHIRT Col Rond", price : "100" ,image: "h1"},
    {id:"2", title: "T-SHIRT piqué ultrafin", price : "100" ,image: "h2"},
    {id:"3", title: "T-SHIRT Col V", price : "100" ,image: "h3"},
    {id:"4", title: "T-SHIRT Col V", price : "100" ,image: "h4"},
    {id:"5", title: "T-SHIRT Col V", price : "100" ,image: "h5"},
    {id:"6", title: "T-SHIRT V", price : "100" ,image: "h6"},
    {id:"7", title: "T-SHIRT Col Rond", price : "100" ,image: "h7"},
    {id:"8", title: "T-SHIRT Marinière Ultrafin", price : "100" ,image: "h8"}
  ]

}
