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
    {title: "T-SHIRT Col Rond", price : "100" ,image: "h1"},
    {title: "T-SHIRT piqué ultrafin", price : "100" ,image: "h2"},
    {title: "T-SHIRT Col V", price : "100" ,image: "h3"},
    {title: "T-SHIRT Col V", price : "100" ,image: "h4"},
    {title: "T-SHIRT Col V", price : "100" ,image: "h5"},
    {title: "T-SHIRT V", price : "100" ,image: "h6"},
    {title: "T-SHIRT Col Rond", price : "100" ,image: "h7"},
    {title: "T-SHIRT Marinière Ultrafin", price : "100" ,image: "h8"}
  ]

}
