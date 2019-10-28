import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private uri:string = `http://localhost:3000/`
  constructor(private http:Http) { }
}
