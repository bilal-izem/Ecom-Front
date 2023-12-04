import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UniverComponent } from './univer/univer.component';
import { FemmeComponent } from './femme/femme.component';
import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { FavorisComponent } from './favoris/favoris.component';
import { DataService } from './data.service';
import { EnfantService } from './enfant/service/enfant.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AcceuilComponent, HommeComponent, FemmeComponent, EnfantComponent, UniverComponent,RouterModule, CompteComponent,HttpClientModule,FavorisComponent],

})
export class AppComponent implements OnInit{
  title = 'ecomSite';
  totalLikes: number = 0;
  likedItems=[];


  constructor(private dataService: DataService) {}

  paragraphs = [
    {title : "RENDEZ-VOUS SHOP JUSQU'A : - 30%"},
    {title : "LIVRAISON ET RETOURS GRATUITS SUR 30 JOURS"}
  ]
  currentIndex = 0;

  ngOnInit() {
    interval(2000).subscribe(() => {
    this.currentIndex = (this.currentIndex + 1) % this.paragraphs.length;
  });
  this.getLength()

}
getLength(){
  return this.dataService.favourisLength;
 }
}
