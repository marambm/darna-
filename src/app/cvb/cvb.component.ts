import { Component } from '@angular/core';

@Component({
  selector: 'app-cvb',
  templateUrl: './cvb.component.html',
  styleUrls: ['./cvb.component.css']
})
export class CvbComponent {
  agents = [
    {
      nom: 'Inès Gharbi',
      specialite: '5 ans d’expérience',
      photo: 'assets/images/ines.jpg',  // Mets ici exactement le chemin où se trouve l’image
      lienCV: 'ines.html'
    },
    {
      nom: 'Youssef Trabelsi',
      specialite: '3 ans d’expérience',
      photo: 'assets/images/youssef.jpg',
      lienCV: 'youssef.html'
    },
    // Ajoute les autres agents ici...
  ];
}
