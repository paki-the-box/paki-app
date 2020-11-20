import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {addWarning} from '@angular-devkit/build-angular/src/utils/webpack-diagnostics';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://idsvr4.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token?: string;
  public isLogin = false;

  constructor(private activatedRoute: ActivatedRoute, private oauthService: OAuthService) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((data) => {
      const fragments = data.split('&');
      console.log(fragments);
      for (const fragment of fragments) {
        console.log(fragment);
        const strings = fragment.split('=');
        console.log(strings);
        if (strings[0] == 'access_token') {
          console.log('Access Token is set...');
          const access_token = strings[1];
          this.token = access_token;
          this.isLogin = true;
          return;
        }
      }
    });
  }

  login() {
    // window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("https://paki.pragmaticminds.de/auth-callback") + "&response_type=token&scope=email", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
    // window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("http://localhost:4200/login") + "&response_type=token&scope=email", "_self", "location=no,clearsessioncache=yes,clearcache=yes");
    console.log('Configure');
    this.oauthService.configure(authCodeFlowConfig);
    console.log('Try Login');
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.oauthService.initImplicitFlow();
    });
  }

}
