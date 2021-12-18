import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductComponent} from "./product.component";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'create',
    component: ProductFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
