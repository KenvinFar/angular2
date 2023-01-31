import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient:HttpClient) { }

  getProducts(){
    this.httpClient.get('https://api.escuelajs.co/api/v1/products');
  }
}
