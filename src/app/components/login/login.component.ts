import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Output() isAuth = new EventEmitter<boolean>();
  model: any = {};
  isValidating = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
        // this.authenticationService.logout();
        this.model.username = "Admin@test.com";
        this.model.password = "password";
        this.returnUrl =
          this.route.snapshot.queryParams["returnUrl"] || "loading";
          // this.isloading = false;
          // this.isAuthenticated =  false;
    
  }



  login() {
    this.isValidating = true;
    // this.isloading = true;

  }

}
