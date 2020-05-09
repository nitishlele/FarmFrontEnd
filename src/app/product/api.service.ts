import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';
import { Farmer } from '../farmer';
import { Company } from '../company';
import { Sell } from '../sell';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/api/v1/products";
const apiUrl1 = "http://localhost:8080/api/v1/registration";
const apiUrl2 = "http://localhost:8080/api/v1/admin";
const apiUrl3 = "http://localhost:8080/api/v1/ngo";
const apiUrl4 = "http://localhost:8080/api/v1/farmer";
const apiUrl5 = "http://localhost:8080/api/v1/company";
const apiUrl6 = "http://localhost:8080/api/v1/sell";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private product;
  private farmer;
  private company;
  private sell;
 
 public saveProduct(p){
   this.product=p;
 }

 public getProductdetail()
 {
   return this.product;
 }

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(products => console.log('Fetch products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct (product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  addSell (sell): Observable<Sell> {
    return this.http.post<Sell>(apiUrl6, sell, httpOptions).pipe(
      tap((sell: Sell) => console.log(`added product w/ id=${sell}`)),
      catchError(this.handleError<Sell>('addSell'))
    );
  }

  addFarmer (farmer): Observable<Farmer> {
    return this.http.post<Farmer>(apiUrl4, farmer, httpOptions).pipe(
      tap((farmer: Farmer) => console.log(`added farmer w/ id=${farmer}`)),
      catchError(this.handleError<Farmer>('addFarmer'))
    );
  }

  getFarmer(id: number): Observable<Farmer> {
    const url = `${apiUrl4}/${id}`;
    return this.http.get<Farmer>(url).pipe(
      tap(_ => console.log(`fetched farmer id=${id}`)),
      catchError(this.handleError<Farmer>(`getFarmer id=${id}`))
    );
  }

  addCompany (company): Observable<Company> {
    return this.http.post<Company>(apiUrl5, company, httpOptions).pipe(
      tap((company: Company) => console.log(`added company w/ id=${company}`)),
      catchError(this.handleError<Company>('addCompany'))
    );
  }

  updateProduct (id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
