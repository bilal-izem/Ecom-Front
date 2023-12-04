import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent {

  constructor(private dataService : DataService){}
  @Output() likedItems = [
  {id: "1",title: "T-SHIRT Col Rond", price : "100",isLiked: false},
  {id: "1",title: "T-SHIRT Col Rond", price : "100",isLiked: false},

 ]
 getLength(){
  this.dataService.favourisLength = this.likedItems.length;
  return this.dataService.favourisLength;
 }

}
