import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public token?: string;
  public isLogin: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((data) => {
      const fragments = data.split('&');
      console.log(fragments);
      for (const fragment of fragments) {
        console.log(fragment);
        const strings = fragment.split('=');
        console.log(strings);
        if (strings[0] === 'access_token') {
          console.log('Access Token is set...');
          const accesstoken = strings[1];
          this.token = accesstoken;
          this.authService.setToken(accesstoken);
          this.isLogin = true;
          return;
        }
      }
    });
  }

  login() {
    this.authService.login();
  }

}
