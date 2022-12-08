import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  authForm:FormGroup
  constructor(private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.authForm=this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['', Validators.required]
    })
  }
  onSubmit(form:FormGroup){
    if(form.valid){
      console.log(form)
      this.authService.login(form.value.email, form.value.password).subscribe(data=>{
        console.log(data)
      })
    }else{
      console.log("complete todos los datos requeridos")
    }

  }

}
