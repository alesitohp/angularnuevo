import { Component, inject } from '@angular/core';
import { ProductTableComponent } from "../../../products/components/product-table/product-table.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTableComponent,RouterLink],
  templateUrl: './products-admin-page.component.html',
})
export class ProductsAdminPageComponent {

  productsService = inject(ProductsService);

  productsResource = rxResource({

    request: () => ({}),
    loader:({request})=>{
      return this.productsService.getProducts({});
    },
  });


}
