import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}