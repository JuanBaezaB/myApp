import { Component, OnInit } from '@angular/core';  
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  authForm:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authForm=this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['', Validators.required]
    })
  }
  onSubmit(form:FormGroup){
    console.log(form)
  }

}
