import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGenericResponseDTO } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getData(optionUrl: string): Observable<IGenericResponseDTO[]> {
    return this.http.get<IGenericResponseDTO[]>(`${environment.apiURL}/${optionUrl}`);

  }
}
