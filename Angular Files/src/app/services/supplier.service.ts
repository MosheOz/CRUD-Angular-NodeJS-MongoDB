import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Supplier } from '../models/supplier';
import { Country } from '../models/country';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor(public http: HttpClient) { }

    public getSuppliers(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>("http://localhost:3000/api/suppliers");
    }

    public getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>("http://localhost:3000/api/countries");
    }

    public addSupplier(s): Observable<Supplier[]> {
        return this.http.post<Supplier[]>("http://localhost:3000/api/suppliers", s);
    }

    public editSupplier(_id, s): Observable<Supplier> {
        return this.http.put<Supplier>("http://localhost:3000/api/suppliers/" + _id, s)
    }

    public editPrtialSupplier(_id, s): Observable<Supplier> {
        return this.http.patch<Supplier>("http://localhost:3000/api/suppliers/" + _id, s)
    }

    public deleteSupplier(_id): Observable<Supplier> {
        return this.http.delete<Supplier>("http://localhost:3000/api/suppliers/" + _id);
    }
}
