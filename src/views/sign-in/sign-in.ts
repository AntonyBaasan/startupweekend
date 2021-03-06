import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';


@Component({
  selector: 'sign-in',
  styles: [
    require('./sign-in.scss')
  ],
  template: `
    <div class="g-row sign-in">
      <div class="g-col">
        <h1 class="sign-in__heading">Sign in</h1>
        <button class="sign-in__button hvr-glow" (click)="signInWithGithub()" type="button">GitHub</button>
        <!--<button class="sign-in__button hvr-glow" (click)="signInWithGoogle()" type="button">Google</button>-->
        <button class="sign-in__button hvr-glow" (click)="signInWithTwitter()" type="button">Twitter</button>
        <button class="sign-in__button hvr-glow" (click)="signInWithFacebook()" type="button">Facebook</button>
      </div>
    </div>
  `
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SignIn {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
        .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    // this.router.navigate(['/Tasks']);
    window.location.href = '/tasks';
  }
}
