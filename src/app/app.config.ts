import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });
import { routes } from './app.routes';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UniverComponent } from './univer/univer.component';
import { FemmeComponent } from './femme/femme.component';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
