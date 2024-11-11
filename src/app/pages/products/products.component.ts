import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private _servProducto = inject(ApiService);
  private _router = inject(Router);
  lsProductos: IProduct[] = [];
  

  ngOnInit(): void {
    this._servProducto.getProductos().subscribe((data: IProduct[]) => {
      this.lsProductos = data;
    });
  }

  verDetalleProucto(id: number) {
    this._router.navigate(['products',id])
  }




}
