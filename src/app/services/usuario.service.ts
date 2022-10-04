import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {nombre: 'Juan', apellido: "Perez", email: "Juanperez@gmail.com", dni: 20283159, fNacimiento: new Date("2001-06-26"), telefono: '3834645444', direccion: 'peru 3356'},
    {nombre: 'Pepa', apellido: "Pistolera", email: "pepap@gmail.com", dni: 19125985, fNacimiento: new Date("2005-03-24"), telefono: '3834645899', direccion: 'colon 4536'},
    {nombre: 'Wilson', apellido: "Calderazzi", email: "vidayfuturo@gmail.com", dni: 28780726, fNacimiento: new Date("2015-08-29"), telefono: '3834555894', direccion: 'augier 456'},
    {nombre: 'Maria', apellido: "Lopez", email: "lopezmary@gmail.com", dni: 30258999, fNacimiento: new Date("1995-05-15"), telefono: '3834645234', direccion: 'hirigpyen 1456'},
    {nombre: 'Barbara', apellido: "Fernandez", email: "barbyfer@gmail.com", dni: 23333584, fNacimiento: new Date("1990-01-12"), telefono: '3834633894', direccion: 'san luis 56'},
    {nombre: 'Franco', apellido: "Diaz", email: "diazfran23@gmail.com", dni: 30258999, fNacimiento: new Date("2000-02-22"), telefono: '3834645854', direccion: 'mendoza 4356'},
    {nombre: 'Marcia', apellido: "Gonzales", email: "marciag@gmail.com", dni: 31254456, fNacimiento: new Date("2010-03-20"), telefono: '3834642394', direccion: 'rojas 252'},
  ]


  constructor() { }

  arrayStorage: Usuario[] = [];
  edit: any;



  getUsuario() {
    this.arrayStorage = JSON.parse(localStorage.getItem('usuarios') || 'null');
    if(this.arrayStorage == null) {
      localStorage.setItem(`usuarios`, JSON.stringify(this.listUsuarios));
      return this.listUsuarios.slice();
    }else {
      return this.arrayStorage.slice();
    }
  }


  eliminarUsuario(index: number) {
    if(this.arrayStorage == null) {
      this.listUsuarios.splice(index, 1);
    localStorage.setItem(`usuarios`, JSON.stringify(this.listUsuarios));
    }else {
      this.arrayStorage.splice(index, 1);
    localStorage.setItem(`usuarios`, JSON.stringify(this.arrayStorage));
    }
    
  }


  agregarUsuario(usuario: Usuario) {
    if(this.arrayStorage == null) {
      this.listUsuarios.unshift(usuario);
      localStorage.setItem(`usuarios`, JSON.stringify(this.listUsuarios));
    }else {
      this.arrayStorage.unshift(usuario);
      localStorage.setItem(`usuarios`, JSON.stringify(this.arrayStorage));
    }
  }

  editarUsuario(usuario: Usuario) {
    this.edit = usuario;
  }

  agregarUsuarioEditado(user: Usuario) {
    this.arrayStorage.unshift(user);
      localStorage.setItem(`usuarios`, JSON.stringify(this.arrayStorage));
  }
}

