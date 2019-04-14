import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Supplier } from '../../models/supplier';
import { Country } from '../../models/country';

@Component({
    selector: 'app-add-supplier',
    templateUrl: './add-supplier.component.html',
    styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

    public newSupplier = new Supplier();
    public countries: Country[];
    constructor(public supplierService: SupplierService, public router: Router) { }

    public ngOnInit(): void {
        this.supplierService.getCountries()
            .subscribe((countries) => {
                this.countries = countries;
            }, response => {
                console.log(" error with getting countries from servr: " + response.error.message)
            })
    }

    public send(): void {
        this.supplierService.addSupplier(this.newSupplier)
            .subscribe(() => {
                this.router.navigate(["suppliers"])
            }, response => {
                alert(" error with adding supplier: " + response.error.message)
            })
    }

}
