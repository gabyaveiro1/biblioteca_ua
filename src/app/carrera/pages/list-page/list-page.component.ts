import { Component, OnInit,ViewChild } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Carrera } from '../../interfaces/carrera.interface';
import { CareerService } from '../../services/carrera.service';

declare var require: any;
const data: any = require('../../../shared/data/user.json');
@Component({
  selector: 'app-carrera-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public carreras: Carrera[] = [];
   rows = [];

    temp = [];

    // Table Column Titles
    columns = [
        { prop: 'codigo' },
        { name: 'descripcion' },
        { name: 'activo' },
        { name: 'acciones' },
    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;



    public careerForm = new FormGroup({
      id: new FormControl(''),
      codigo: new FormControl(''),
      descripcion: new FormControl(''),
      activo: new FormControl(''),
    });
  constructor(
    private careerService: CareerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      console.log(this.carreras);
      this.temp = [...data];
      this.rows = data;
    }

  ngOnInit(): void {
    this.careerService.getCarrers()
      .subscribe( carreras => this.carreras = carreras );
      console.log(this.carreras);

      
      if ( !this.router.url.includes('edit') ) return;

      // this.activatedRoute.params
      //   .pipe(
      //     switchMap( ({ id }) => this.usuariosService.getUserById( id ) ),
      //   ).subscribe( user => {
  
      //     if ( !user ) {
      //       return this.router.navigateByUrl('/');
      //     }
  
      //     this.userForm.reset( user );
      //     return;
      //   });
    
  }

  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
        return d.codigo.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
}
  // onDeleteUser(id: number) {
  //   console.log(id);
  //   this.usuariosService.deleteUserById( id );

  // }
  get currentCareer(): Carrera{
    const career = this.careerForm.value as unknown as Carrera;
    return career;
  }
  onSubmit(): void{
    if(this.careerForm.invalid) return;

    // if(this.currentCareer.id){
    //   this.careerService.updateUser(this.currentCareer)
    //   .subscribe(user => {


    //   });
    //   return;
    // }
    this.careerService.addCarrer(this.currentCareer)
    .subscribe(user => {
      
    });
  }

}
