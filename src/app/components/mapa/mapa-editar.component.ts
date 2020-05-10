import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

export interface DialogData {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}

  onNoClick(): void {
      this.dialogRef.close();
  }

  guardarCambios(form: NgForm) {
    this.dialogRef.close({title: form.controls.title.value, desc: form.controls.desc.value});
  }
}
