import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token?: string;
  public isLogin: boolean = false

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((data) => {
      let fragments = data.split("&");
      console.log(fragments)
      for (let fragment of fragments) {
        console.log(fragment)
        let strings = fragment.split("=");
        console.log(strings)
        if (strings[0] == "access_token") {
          console.log("Access Token is set...")
          let access_token = strings[1];
          this.token = access_token
          this.isLogin = true;
          return;
        }
      }
    });
  }

  login() {
    // window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("https://paki.pragmaticminds.de/auth-callback") + "&response_type=token&scope=email", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
    window.open("https://auth.demo.pragmaticindustries.de/auth/realms/packi/protocol/openid-connect/auth?client_id=packi_app&redirect_uri=" + encodeURIComponent("http://localhost:4200/login") + "&response_type=token&scope=email", "_self", "location=no,clearsessioncache=yes,clearcache=yes");
  }

}
