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
    {title: "HOODIE Classique Enfant", price : "100" ,image: "e1"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e2"},
    {title: "COL ROULE Classique Enfant", price : "100" ,image: "e3"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e4"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e5"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e6"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e7"},
    {title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e8"}
  ]
}
