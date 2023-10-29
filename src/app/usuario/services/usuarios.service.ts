import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../../environments/environment.prod';
import { catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UsuarioService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http : HttpClient) { }


  getUsers():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(`${this.baseUrl}/users`);
  }


  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/users`, usuario);
  }

  updateUser(usuario: Usuario): Observable<Usuario> {
    if (!usuario.id) throw Error('El id es requerido');

    return this.http.patch<Usuario>(
      `${this.baseUrl}/users/${usuario.id}`,
      usuario
    );
  }
  getUserById( id: string ): Observable<Usuario|undefined> {
    return this.http.get<Usuario>(`${ this.baseUrl }/users/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  deleteUserById(id: number): Observable<boolean> {
    console.log(id);
    return this.http.delete(
      `${this.baseUrl}/users/${id}`)
    .pipe(
      catchError(error => of(false)),
      map( resp => true)
    );
  }
}
