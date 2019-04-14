import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { Supplier } from '../../models/supplier';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-edit-supplier',
    templateUrl: './edit-supplier.component.html',
    styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

    countries: Country[];
    suppliers: Supplier[];
    editedSupplier = new Supplier();

    constructor(public suppliersService: SupplierService, public router: Router) { }

    ngOnInit() {
        this.suppliersService.getSuppliers()
            .subscribe((suppliers) => {
                this.suppliers = suppliers;
            }, response => {
                console.log("error: " + response.error.message)
            });

        this.suppliersService.getCountries()
            .subscribe((countries) => {
                this.countries = countries;
            }, response => {
                console.log("error: " + response.error.message)
            });
    };

    public send(): void {
        this.suppliersService.editSupplier(this.editedSupplier._id, this.editedSupplier)
            .subscribe(() => {
                this.router.navigate(["suppliers"]);
            }, response => {
                alert("error: " + response.error.message)
            })
    };

}
