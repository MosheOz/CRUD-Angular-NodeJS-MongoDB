import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Supplier } from '../../models/supplier';

@Component({
    selector: 'app-delete-supplier',
    templateUrl: './delete-supplier.component.html',
    styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

    public suppliers: Supplier[];
    public supplier = new Supplier();
    constructor(public suppliersService: SupplierService, public router: Router) { }

    ngOnInit() {
        this.suppliersService.getSuppliers()
            .subscribe((suppliers) => {
                this.suppliers = suppliers;
                console.log(this.suppliers)
            }, response => {
                console.log("error:" + response.error.message)
            })
    }

    public send(): void {
        this.suppliersService.deleteSupplier(this.supplier._id)
            .subscribe(() => {
                this.router.navigate(["suppliers"])
            }, response => {
                alert("error: " + response.message);
            })
    }

}
