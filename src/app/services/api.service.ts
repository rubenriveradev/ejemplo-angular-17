import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _serpProducto = inject(HttpClient);
  private baseUrl = 'https://fakestoreapi.com/products'

  getProductos(): Observable<IProduct[]> {
    return this._serpProducto.get<IProduct[]>(this.baseUrl);
  }

  getProductoById(id: number): Observable<IProduct> {
    return this._serpProducto.get<IProduct>(`${this.baseUrl}/${id}`)
  }


}
