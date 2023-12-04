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

  constructor() {}

  femmeItems = [
    {id: "1",title: "T-SHIRT Col Rond", price : "100",isLiked: false},
    {id: "2",title: "T-SHIRT piqué ultrafin", price : "100",isLiked: false},
    {id: "3",title: "T-SHIRT Col V", price : "100",isLiked: false},
    {id: "4",title: "T-SHIRT Col V", price : "100",isLiked: false},
    {id: "5",title: "T-SHIRT Col V", price : "100",isLiked: false },
    {id: "6",title: "T-SHIRT V", price : "100",isLiked: false },
    {id: "7",title: "T-SHIRT Col Rond", price : "100",isLiked: false },
    {id: "8",title: "T-SHIRT Marinière Ultrafin", price : "100",isLiked: false}
  ]

  toggleLike(item: any) {
    item.isLiked = !item.isLiked;
  }









  selectedForm: string | null = null;

  showForm(formName: string): void {
    this.selectedForm = formName;
  }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }



//Show Size Button
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



//show Colors Button
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


// button "Effacer tout"
clearAllSizes() {
  for (let color of this.colors){
    this.selectedColors[color] = false;
  }
  for (let size of this.sizes){
    this.selectedSizes[size] = false;
  };

  }

}
