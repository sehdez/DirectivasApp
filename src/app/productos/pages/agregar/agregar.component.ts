import { NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  color = 'red';
  msg = 'El texo debe de ser Obligatorio'

  constructor( private fb: FormBuilder ) { }
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })


  tieneError(campo:string): boolean{
    if ( this.miFormulario.get(campo)?.invalid 
        && this.miFormulario.get(campo)?.touched){
          return true;
        }
    return false;
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
   }
   cambiarNombre(){
     if(this.msg === 'El texo debe de ser Obligatorio'){
       this.msg = 'El texo es obligatorio';
     }
     else{
      this.msg = 'El texo debe de ser Obligatorio'
     }
   }




}
