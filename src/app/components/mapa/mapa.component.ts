import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 51.618718;
  lng = 7.809007;

  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    // const nuevoMarcador = new Marcador(this.lat, this.lng);
    // this.marcadores.push(nuevoMarcador);
   }

  ngOnInit() {
  }

  newMarker(evento) {
    // console.log( evento );
    const coords: {lat: number, lng: number} = evento.coords;
    this.snackBar.open('Marcador agregado', 'Cerrar', {
      duration: 2000,
    });
    this.marcadores.push(new Marcador(coords.lat, coords.lng));
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index: number) {
    this.snackBar.open(this.marcadores[index].title, 'Cerrar', {
      duration: 2000,
    });
    this.marcadores.splice(index, 1);
    this.guardarStorage();
  }

  editMarker(index: number) {
    console.log( this.marcadores[index].title);
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '850px',
      data: {title: this.marcadores[index].title, desc: this.marcadores[index].desc}
    });

    dialogRef.afterClosed().subscribe( result => {
      if ( !result ) {
        return;
      }
      this.marcadores[index].title = result.title;
      this.marcadores[index].desc = result.desc;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
    });
  }

  editarMarcador( marcador: Marcador ) {

    const dialogRef = this.dialog.open( MapaEditarComponent , {
      width: '250px',
      data: { title: marcador.title, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if ( !result ) {
        return;
      }

      marcador.title = result.title;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });

    });

  }

}
