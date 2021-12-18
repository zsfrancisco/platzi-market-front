import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./modules/purchase/purchase.module').then(module => module.PurchaseModule)
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
