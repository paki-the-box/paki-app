import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log("Hallo")
      console.log(params)
      this.token = params.get('access_token');
      console.debug(this.token);
    });
  }

  login() {
    // window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("https://paki.pragmaticminds.de/auth-callback") + "&response_type=token&scope=email", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
    window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("http://localhost:4200/login") + "&response_type=token&scope=email", "_self", "location=no,clearsessioncache=yes,clearcache=yes");
  }

  public oauthLogin() {
    return new Promise(function(resolve, reject) {
      // https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?response_type=token&state=&client_id=packi_app&scope=email&redirect_uri=https%3A%2F%2Foauth.pstmn.io%2Fv1%2Fcallback
      window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("https://paki.pragmaticminds.de/auth-callback") + "&response_type=token&scope=email", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
    });
  }

}
