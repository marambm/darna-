import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });

      navMenu.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', () => {
          navMenu.classList.remove('open');
        });
      });
    }
  }
}
