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
    {id: "1",title: "T-SHIRT Col Rond", price : "100" ,image: "f1"},
    {id: "2",title: "T-SHIRT piqué ultrafin", price : "100" ,image: "f2"},
    {id: "3",title: "T-SHIRT Col V", price : "100" ,image: "f3"},
    {id: "4",title: "T-SHIRT Col V", price : "100" ,image: "f4"},
    {id: "5",title: "T-SHIRT Col V", price : "100" ,image: "f5"},
    {id: "6",title: "T-SHIRT V", price : "100" ,image: "f6"},
    {id: "7",title: "T-SHIRT Col Rond", price : "100" ,image: "f7"},
    {id: "8",title: "T-SHIRT Marinière Ultrafin", price : "100" ,image: "f8"}
  ]
}
