import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../models/brand.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService) {}

  getAllBrands() {
  return this.httpClient.get<any>(`https://localhost:5001/v1/Brand/getBrandIndex`);
  }

  getBrandById(id: string) {
    let params = new HttpParams();
    params = params.set('Id', id);
    return this.httpClient.get<any>(`https://localhost:5001/v1/Brand/getBrandById`,  {
        params: params
      });
  }

  addBrand(data: Brand) {
    return this.httpClient
      .post(`https://localhost:5001/v1/Brand/addBrand`, data);
  }

  updateBrand(data: Brand) {
    return this.httpClient.put(`https://localhost:5001/v1/Brand/updateBrand`, data);
  }

  deleteBrand(id: number) {
    return this.httpClient.request(
      'DELETE',
      `https://localhost:5001/v1/Brand/deleteBrand`,
      {
        body: { id }
      }
    );
  }


  form: FormGroup = new FormGroup({
    description: new FormControl('',   [Validators.required, Validators.minLength(3)])
  });

  initializeFormGroup() {
    this.form.setValue({
      description: ''     
    });
  }


}
