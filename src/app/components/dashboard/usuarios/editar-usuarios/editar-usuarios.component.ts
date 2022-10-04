import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private _usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar) {
      this.form = this.fb.group({
        nombre: [_usuarioService.edit.nombre, Validators.required],
        apellido: [_usuarioService.edit.apellido, Validators.required],
        email: [_usuarioService.edit.email, Validators.required, Validators.email],
        dni: [_usuarioService.edit.dni, Validators.required],
        fNacimiento: [_usuarioService.edit.fNacimiento, Validators.required],
        telefono: [_usuarioService.edit.telefono, Validators.required],
        direccion: [_usuarioService.edit.direccion, Validators.required]
      })
    }

  ngOnInit(): void {
  }

  editarUsuario() {
    const user: Usuario = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      email: this.form.value.email,
      dni: this.form.value.dni,
      fNacimiento: this.form.value.fNacimiento,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
    }
    this._usuarioService.agregarUsuarioEditado(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('El usuariio fue editado con éxito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }


}
