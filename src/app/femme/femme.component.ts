import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-femme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './femme.component.html',
  styleUrl: './femme.component.css'
})
export class FemmeComponent {
  femmeItems = [
    {title: "T-SHIRT Col Rond", price : "100" ,image: "f1"},
    {title: "T-SHIRT piqué ultrafin", price : "100" ,image: "f2"},
    {title: "T-SHIRT Col V", price : "100" ,image: "f3"},
    {title: "T-SHIRT Col V", price : "100" ,image: "f4"},
    {title: "T-SHIRT Col V", price : "100" ,image: "f5"},
    {title: "T-SHIRT V", price : "100" ,image: "f6"},
    {title: "T-SHIRT Col Rond", price : "100" ,image: "f7"},
    {title: "T-SHIRT Marinière Ultrafin", price : "100" ,image: "f8"}
  ]
}
