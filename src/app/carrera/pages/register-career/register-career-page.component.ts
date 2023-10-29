import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CareerService } from '../../services/carrera.service';
import { Carrera } from '../../interfaces/carrera.interface';


@Component({
  selector: 'app-register-career-page',
  templateUrl: './register-career-page.component.html',
  styles: [
  ]
})
export class RegisterCareerPageComponent implements OnInit {

  public careerForm = new FormGroup({
    id: new FormControl(''),
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    activo: new FormControl(''),
  });
  constructor (
    private careerService: CareerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  get currentCareer(): Carrera{
    const career = this.careerForm.value as unknown as Carrera;
    return career;
  }

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({ id }) => this.careerService.getUserById( id ) ),
    //   ).subscribe( user => {

    //     if ( !user ) {
    //       return this.router.navigateByUrl('/');
    //     }

    //     this.userForm.reset( user );
    //     return;
    //   });

  }
  onSubmit(): void{
    if(this.careerForm.invalid) return;

    // if(this.currentCareer.id){
    //   this.careerService.updateUser(this.currentUser)
    //   .subscribe(user => {


    //   });
    //   return;
    // }
    this.careerService.addCarrer(this.currentCareer)
    .subscribe(user => {
      
    });
  }
}
