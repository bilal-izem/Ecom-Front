import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
previousItem() {
throw new Error('Method not implemented.');
}
nextItem() {
throw new Error('Method not implemented.');
}
  imgName : string = "img1";
  isSpinning: boolean = false;

  imageState = 'in';
  options: string |null = null;

  changeImage(){
    this.isSpinning = true;
    switch (this.options){
      case "op1":
        this.imgName = "img1";
        break;
      case "op2":
        this.imgName = "img1";
        break;
      case "op3":
        this.imgName = "img1";
        break;
      case "op4":
        this.imgName = "img1";
        break;

    }
  }
  hommeProducts = [
    {title: "T-shirt white Color", price : "60", image: "h1"},
    {title: "T-shirt white Color", price : "60", image: "h1"},
    {title: "T-shirt white Color", price : "60", image: "h1"}
  ]
  femmeProducts = [
    {title: "T-shirt white Color", price : "70", image: "f1"},
    {title: "T-shirt white Color", price : "70", image: "f1"},
    {title: "T-shirt white Color", price : "70", image: "f1"}
  ]
  enfantProducts = [
    {title: "T-shirt white Color", price : "50", image: "h2"},
    {title: "T-shirt white Color", price : "50", image: "h2"},
    {title: "T-shirt white Color", price : "50", image: "h2"}
  ]
}

