import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Brand } from 'src/app/core/models/brand.model';
import { BrandService } from 'src/app/core/services/brand.service';
@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

  description: string;
  constructor(public dialogRef: MatDialogRef<BrandDeleteComponent>,
    public service: BrandService,
    @Inject(MAT_DIALOG_DATA) public data: Brand) { }

  ngOnInit(): void {
    this.description = this.data.description;
  }

  Delete() {
    this.service.deleteBrand(this.data.id).subscribe(x => this.dialogRef.close(),
    error => console.log("algo salio mal"));
  }

}
