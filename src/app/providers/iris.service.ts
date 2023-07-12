import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrisService {

  private URL: string = 'https://irisfirebase-3379e-default-rtdb.firebaseio.com/collection.json'
  getResponse(){
    return this.http.get(this.URL);
    
  }
  constructor(private http:HttpClient) { }
}
