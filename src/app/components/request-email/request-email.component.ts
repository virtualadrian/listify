import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState,getLoginState } from '../../reducers/index';
import { LoginActions } from '../../actions/login.actions';

@Component({
  selector: 'ist-request-email',
  templateUrl: './request-email.component.html',
  styleUrls: ['./request-email.component.css']
})
export class RequestEmailComponent implements OnInit {
  emailForm: FormGroup;
  email;
  userAuth: any;
  constructor(private fb: FormBuilder,
              private loginActions: LoginActions,
              private store: Store<AppState>) {
   this.store.select(state => this.userAuth = state.userAuth).subscribe()
}

  ngOnInit() {
    this.emailForm = this.fb.group({
      'email': ['', Validators.required]
    });
  }

  login() {
    this.store.dispatch(this.loginActions.storeUser(this.email, this.userAuth))
  }
}
