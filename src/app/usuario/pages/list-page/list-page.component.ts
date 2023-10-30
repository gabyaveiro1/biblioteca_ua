import { Component, OnInit, ViewChild } from "@angular/core";
import { Usuario } from "../../interfaces/usuario.interface";
import { UsuarioService } from "../../services/usuarios.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { switchMap } from "rxjs/operators";

declare var require: any;
const data: any = require("../../../shared/data/user.json");
@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styles: [],
})
export class ListPageComponent implements OnInit {
  public usuarios: Usuario[] = [];
  rows = [];

  temp = [];

  // Table Column Titles
  columns = [{ prop: "usuario" }, { name: "email" }, { name: "acciones" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  public userForm = new FormGroup({
    id: new FormControl(""),
    usuario: new FormControl(""),
    email: new FormControl(""),
  });
  constructor(
    private usuariosService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.usuarios);
    // this.temp = [...data];
    // this.rows = data;
    console.log(data);
  }
  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe(
      (x) => (this.temp = [...x],this.rows = x),

    );
    console.log(this.usuarios);
    if (!this.router.url.includes("edit")) return;
  }
  displayedColumns: string[] = ["usuario", "email", "acciones"];

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.usuario.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  edit(id) {
    console.log(id);
    this.usuariosService.getUserById(id).subscribe((user) => {
      this.userForm.reset(user);
      return;
    });
  }
  delete(id) {
    console.log(id);
    this.usuariosService.deleteUserById(id).subscribe((user) => {
      console.log(user);
    });
  }
  onDeleteUser(id: number) {
    console.log(id);
    this.usuariosService.deleteUserById(id);
    // if ( !id ) throw Error('Hero id is required');

    // const dialogRef = this.dialog.open( ConfirmDialogComponent, {
    //   data: this.userForm.value
    // });

    // dialogRef.afterClosed()
    //   .pipe(
    //     filter( (result: boolean) => result ),
    //     switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id )),
    //     filter( (wasDeleted: boolean) => wasDeleted ),
    //   )
    //   .subscribe(() => {
    //     this.router.navigate(['/heroes']);
    //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   if ( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if ( wasDeleted )
    //       this.router.navigate(['/heroes']);
    //   })
    // });
  }
  get currentUser(): Usuario {
    const user = this.userForm.value as unknown as Usuario;
    return user;
  }
  onSubmit(): void {
    if (this.userForm.invalid) return;

    if (this.currentUser.id) {
      this.usuariosService.updateUser(this.currentUser).subscribe((user) => {});
      return;
    }
    this.usuariosService.addUser(this.currentUser).subscribe((user) => {});
  }
}
