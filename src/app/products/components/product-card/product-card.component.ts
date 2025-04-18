import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductImagePipe } from "../../pipes/product-image.pipe";

@Component({
  selector: 'product-card',
  imports: [RouterLink, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  product = input.required<Product>();

}
