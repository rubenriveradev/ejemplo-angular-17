import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formularioContacto!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioContacto = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mensage: ['', [Validators.required, Validators.minLength(10)]]//en el html la palabra minLength debe ser en minuscula
    })

  }


  ngOnInit(): void {

  }

  hasErrors(controlName:string,typeError:string){
    return this.formularioContacto.get(controlName)?.hasError(typeError) && this.formularioContacto.get(controlName)?.touched;
  }

  enviar(e: Event) {
    e.preventDefault();
    console.log(this.formularioContacto.value);
  }

}
