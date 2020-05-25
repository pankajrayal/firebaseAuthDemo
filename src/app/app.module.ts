import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AngularFireAuthModule,
    MDBBootstrapModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}