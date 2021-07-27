import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userGroup!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.userGroup = this.fb.group({
      name: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.apiService.login(this.userGroup.controls.name.value,
      this.userGroup.controls.password.value)
  }
}
