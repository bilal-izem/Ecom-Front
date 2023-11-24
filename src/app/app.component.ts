import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UniverComponent } from './univer/univer.component';
import { FemmeComponent } from './femme/femme.component';
import {
  Carousel,
  initTE,
} from "tw-elements";
import { CompteComponent } from './compte/compte.component';

initTE({ Carousel });

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AcceuilComponent, HommeComponent, FemmeComponent, EnfantComponent, UniverComponent,RouterModule, CompteComponent],

})
export class AppComponent {
  title = 'ecomSite';

  paragraphs = [
    {title : "RENDEZ-VOUS SHOP JUSQU'A : - 30%"},
    {title : "LIVRAISON ET RETOURS GRATUITS SUR 30 JOURS"}
  ]
  currentIndex = 0;

  OnInit() {
    interval(2000).subscribe(() => {
    this.currentIndex = (this.currentIndex + 1) % this.paragraphs.length;
  });}


}
