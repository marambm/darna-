import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { CvbComponent } from './cvb/cvb.component';
import { CiComponent } from './ci/ci.component';
import { CyComponent } from './cy/cy.component';
import { MiComponent } from './mi/mi.component';  
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    CvbComponent,
    CiComponent,
    CyComponent,
    MiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   // <- ici dans imports, PAS dans declarations !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
