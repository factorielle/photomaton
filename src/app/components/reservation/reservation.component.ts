import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  ngOnInit(): void {
    this.responsiveScript();
  }

  responsiveScript(){
// Sélection du bouton du menu et de la barre latérale
const menuBar = document.querySelector('.content nav .bi bi-list') as HTMLElement;
const sideBar = document.querySelector('.sidebar') as HTMLElement;

// Gestionnaire de clic pour le bouton du menu
if (menuBar && sideBar) {
  // Gestionnaire de clic pour le bouton du menu
  menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
  });
} else {
  console.error('Les éléments menuBar ou sideBar sont introuvables');
}
}


  }


