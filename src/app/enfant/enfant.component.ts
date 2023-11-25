import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  enfantItems = [
    {id: "1",title: "HOODIE Classique Enfant", price : "100" ,image: "e1"},
    {id: "2",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e2"},
    {id: "3",title: "COL ROULE Classique Enfant", price : "100" ,image: "e3"},
    {id: "4",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e4"},
    {id: "5",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e5"},
    {id: "6",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e6"},
    {id: "7",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e7"},
    {id: "8",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e8"}
  ]
}
