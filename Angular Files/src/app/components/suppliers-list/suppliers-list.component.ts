import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-suppliers-list',
    templateUrl: './suppliers-list.component.html',
    styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {

    private suppliers: Supplier[];

    constructor(public suppliersService: SupplierService, public router: Router) { }

    public ngOnInit(): void {
        this.suppliersService.getSuppliers()
            .subscribe((suppliers) => {
                this.suppliers = suppliers;
            }, response => {
                console.log(response.error.message);
            })
    }

    public delete(_id): void {
        this.suppliersService.deleteSupplier(_id)
            .subscribe(() => {
                this.ngOnInit();
            }, response => {
                console.log(response)
                alert("error: " + response.message);
            })
    }

}
