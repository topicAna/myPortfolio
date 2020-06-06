import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Dishes } from './dishes';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {

  }

putProject(project: Project, id: number): Observable<any> {
    console.log(dishes)
    const putDishesurl = `${this.baseUrl}/dishes/${id}`;
    console.log(putDishesurl);
    return this.http.put(putDishesurl, dishes);
}

postDishes(dishes: Dishes,): Observable<any> {
    return this.http.post(`${this.baseUrl}/dishes`,dishes);
}

getDishes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dishes`);
}


deleteDishes(id: number): Observable<any> {
    const url = `${this.baseUrl}/dishes/${id}`;
    return this.http.delete(url)
}

getDishesById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dishes/${id}`);
}

}