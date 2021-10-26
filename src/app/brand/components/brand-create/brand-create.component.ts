import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Brand } from 'src/app/core/models/brand.model';
import { BrandService } from 'src/app/core/services/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BrandCreateComponent>,
    public service: BrandService,
  ) {}

  ngOnInit(): void {
    this.service.form.reset();
  }

  Crear(value: Brand) {
    this.service.addBrand(value).subscribe(x => this.dialogRef.close(),
    error => console.log("algo salio mal"));
  }

}
