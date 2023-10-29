import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Usuario } from 'src/app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/usuario/services/usuarios.service';

@Component({
  selector: 'app-register-user-page',
  templateUrl: './register-user-page.component.html',
  styles: [
  ]
})
export class RegisterUserPageComponent implements OnInit {

  public userForm = new FormGroup({
    id: new FormControl(''),
    usuario: new FormControl(''),
    email: new FormControl(''),
  });
  constructor (
    private userService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  get currentUser(): Usuario{
    const user = this.userForm.value as unknown as Usuario;
    return user;
  }

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.userService.getUserById( id ) ),
      ).subscribe( user => {

        if ( !user ) {
          return this.router.navigateByUrl('/');
        }

        this.userForm.reset( user );
        return;
      });

  }
  onSubmit(): void{
    if(this.userForm.invalid) return;

    if(this.currentUser.id){
      this.userService.updateUser(this.currentUser)
      .subscribe(user => {


      });
      return;
    }
    this.userService.addUser(this.currentUser)
    .subscribe(user => {
      
    });
  }
}
