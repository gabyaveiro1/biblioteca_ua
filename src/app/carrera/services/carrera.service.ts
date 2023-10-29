import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { catchError, map } from 'rxjs/operators';
import { Carrera } from '../interfaces/carrera.interface';


@Injectable({providedIn: 'root'})
export class CareerService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http : HttpClient) { }


  getCarrers():Observable<Carrera[]>{
      return this.http.get<Carrera[]>(`${this.baseUrl}/carrera/all`);
  }


  addCarrer(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(`${this.baseUrl}/carrera`, carrera);
  }

  // updateUser(usuario: Usuario): Observable<Usuario> {
  //   if (!usuario.id) throw Error('El id es requerido');

  //   return this.http.patch<Usuario>(
  //     `${this.baseUrl}/users/${usuario.id}`,
  //     usuario
  //   );
  // }
  // getUserById( id: string ): Observable<Usuario|undefined> {
  //   return this.http.get<Usuario>(`${ this.baseUrl }/users/${ id }`)
  //     .pipe(
  //       catchError( error => of(undefined) )
  //     );
  // }

  // deleteUserById(id: number): Observable<boolean> {
  //   console.log(id);
  //   return this.http.delete(
  //     `${this.baseUrl}/users/${id}`)
  //   .pipe(
  //     catchError(error => of(false)),
  //     map( resp => true)
  //   );
  // }
}
