import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './components/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './components/delete-supplier/delete-supplier.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, SuppliersListComponent, AddSupplierComponent, EditSupplierComponent, DeleteSupplierComponent, Page404Component, HomeComponent],
  imports: [BrowserModule,AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
