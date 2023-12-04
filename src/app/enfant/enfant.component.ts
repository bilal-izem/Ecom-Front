import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnfantService } from './service/enfant.service';
import { EnfantItem } from './entity/enfant.model';



@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})




export class EnfantComponent{
  // constructor------------------------------------------------------------------------------------
  constructor() {}



  // List statiques de objets de type ENFANT--------------------------------------------------------
  enfantItems = [
    {id: "1",title: "HOODIE Classique Enfant", price : "100" ,image: "e1",isLiked : false},
    {id: "2",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e2",isLiked : false},
    {id: "3",title: "COL ROULE Classique Enfant", price : "100" ,image: "e3",isLiked : false},
    {id: "4",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e4",isLiked : false},
    {id: "5",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e5",isLiked : false},
    {id: "6",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e6",isLiked : false},
    {id: "7",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e7",isLiked : false},
    {id: "8",title: "SWEAT-SHIRT Enfant", price : "100" ,image: "e8",isLiked : false}
  ]
  //personnalisation de l'icon IIKE-----------------------------------------------------------------
  toggleLike(item: any) {
    item.isLiked = !item.isLiked;
  }
  //fenetre de dialog FILTRES-----------------------------------------------------------------------
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  //Show Size Button-------------------------------------------------------------------------------
  showSizeOptions = false;
  sizes = ['S', 'M', 'L', 'XL'];
  selectedSizes: { [key: string]: boolean } = {};
  x:String = "fa-solid fa-plus";
  toggleSizeOptions() {
    this.showSizeOptions = !this.showSizeOptions;
    return this.showSizeOptions ? this.x='fa-solid fa-minus' : this.x='fa-solid fa-plus';
  }
  toggleSize(size: string) {
    this.selectedSizes[size] = !this.selectedSizes[size];
  }
  //show Colors Button----------------------------------------------------------------------------
  showColorOptions = false;
  colors = ['Black', 'Red', 'Yellow', 'Blue', 'Gray'];
  selectedColors: { [key: string]: boolean } = {};
  y:String = "fa-solid fa-plus";

  toggleColorOptions() {
    this.showColorOptions = !this.showColorOptions;
    return this.showColorOptions ? this.y='fa-solid fa-minus' : this.y='fa-solid fa-plus';
  }
  toggleColor(color: string) {
    this.selectedColors[color] = !this.selectedColors[color];
  }
  // button "Effacer tout"-----------------------------------------------------------------------
  clearAllSizes() {
    for (let color of this.colors){
      this.selectedColors[color] = false;
    }
    for (let size of this.sizes){
      this.selectedSizes[size] = false;
    };
  }
}
