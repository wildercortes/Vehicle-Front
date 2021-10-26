import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './brand/components/brand-list/brand-list.component';
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    //component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/marcas',
        pathMatch: 'full',
      },
      {
        path: 'marcas',
        loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
      }
    ]
  },


  // {
  //   path: '',
  //   component: NavComponent,
  //   children: [
  //     {
  //       path: 'marcas',
  //       component: BrandListComponent,
  //     }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
