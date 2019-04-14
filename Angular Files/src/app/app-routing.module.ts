import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './components/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './components/delete-supplier/delete-supplier.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "suppliers", component: SuppliersListComponent},
    {path: "add-supplier" , component: AddSupplierComponent},
    {path: "edit-supplier" , component:EditSupplierComponent},
    {path: "delete-supplier", component: DeleteSupplierComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },
    {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
