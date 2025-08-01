import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ AJOUTER CETTE LIGNE

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router: Router) {} // ✅ AJOUTER LE CONSTRUCTEUR

  showInfo(serviceName: string) {       // ✅ AJOUTER LA MÉTHODE
    this.router.navigate(['/auth'], {
      queryParams: { service: serviceName }
    });
  }

}
