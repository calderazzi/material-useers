import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      fNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const user: Usuario = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      email: this.form.value.email,
      dni: this.form.value.dni,
      fNacimiento: this.form.value.fNacimiento,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
    }
    

    
    
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('El usuario fue agregado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
