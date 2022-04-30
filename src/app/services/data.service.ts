import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private loaderSource = new BehaviorSubject<boolean>(false);
  loader$ = this.loaderSource.asObservable();

  url = environment.url;
  
  constructor(private http:HttpClient) {}

  loadData() {
    this.loaderSource.next(true);

    return this.http.get(this.url, {
      params:{
        page:'1',
        results:'1000',
        nat:'fr',
        gender:'male',
        inc:'id,name,dob,location,phone'
      }
    }).pipe(pluck('results'),map((items:UserDetails[])=>{
      return items.sort((a,b)=>a.dob.age - b.dob.age);
    }),finalize(()=>this.loaderSource.next(false)))
  }
}
