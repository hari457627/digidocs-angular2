import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { JwtService } from '../../shared/services/jwt.service';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Errors } from '../../shared/models/errors.model';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class Login {
  errors: Errors = new Errors();
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public shouldshow: boolean= false;


  constructor(fb: FormBuilder , private userService: UserService,
              private router: Router, private jwtservice: JwtService) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object) {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values).subscribe(
        response => {
          this.userService.getUserRole(response.member.id).subscribe(
            data => {
                    console.log(data);
                    let userRole = 'guest';
                    if (data.length > 0 ) {
                      const roles = _.map(data, 'uRoleName');
                      if ( _.map(roles, 'role:app.tenant.admin') ) {
                        userRole = 'admin';
                        this.userService.setRole(userRole);
                        this.router.navigateByUrl('pages');
                      }
              }else {
                /* alert(userRole);*/
                this.userService.setRole(userRole);
                this.router.navigateByUrl('pages');
              }
            });
        },
            err => {

             /* this.errors = err;
              $('#over').modal('show');
              setTimeout(function() {
                $('#over').modal('hide');
              }, 1500);*/
              this.shouldshow = true;
            })
    }
  }
  ngOnInit() {}
}
