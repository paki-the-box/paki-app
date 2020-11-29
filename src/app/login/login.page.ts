import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {authCodeFlowConfig, AuthService} from '../auth.service';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token?: string;
  public isLogin: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private oauthService: OAuthService) { }

  ngOnInit() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(
        _ => {
          if (this.authService.isLoggedIn()) {
            this.token = "Logged In!"
          } else {
            this.token = "Not Logged In!"
          }
        }
    )
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout()
  }
}
