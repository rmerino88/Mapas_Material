import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar-alt',
  templateUrl: './mapa-editar-alt.component.html',
  styleUrls: ['./mapa-editar-alt.component.css']
})
export class MapaEditarAltComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarAltComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log( data  );
      this.forma = fb.group({
        title: data.title,
        desc : data.desc
      });

    }

  ngOnInit() {
  }

  guardarCambios() {

    this.dialogRef.close(this.forma.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
