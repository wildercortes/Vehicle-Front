import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Brand } from 'src/app/core/models/brand.model';
import { BrandService } from 'src/app/core/services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public Id: string,
    public dialogRef: MatDialogRef<BrandEditComponent>,
    public service: BrandService
  ) {

  }

  ngOnInit(): void {
     this.GetBrand();
  }

  GetBrand() {
    this.service.getBrandById(this.Id)
      .subscribe(deparment => this.LoadForm(deparment),
        error => console.error(error));

  }

  LoadForm(brand: Brand) {
    this.service.form?.patchValue({
      description: brand.description
    });
  }

  Edit(value: any) {
    value.id = this.Id;
    this.service.updateBrand(value).subscribe(x => this.dialogRef.close(),
    error => console.log("algo salio mal"));
  }

}
