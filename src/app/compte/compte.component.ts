import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {

  selectedForm: string | null = null;

  showForm(formName: string): void {
    this.selectedForm = formName;
  }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
