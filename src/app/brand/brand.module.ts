import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrandCreateComponent } from './components/brand-create/brand-create.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BrandListComponent, BrandCreateComponent, BrandEditComponent, BrandDeleteComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BrandModule { }
