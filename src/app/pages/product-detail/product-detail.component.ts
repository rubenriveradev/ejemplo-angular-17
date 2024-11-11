import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  private _route = inject(ActivatedRoute)
  private _servProducto = inject(ApiService);
  public producto?: IProduct;
  loading: boolean = true;
  color: string = '';

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._servProducto.getProductoById(params['id']).subscribe((data: IProduct) => {
        this.producto = data;
        this.color = this.producto?.price as number > 5 ? 'red' : ''
        console.log(data);
        this.loading = false;
      });
    })
  }

}
