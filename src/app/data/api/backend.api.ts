import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

interface BackendStatusResponse {
  campoPrueba: string;
}

export interface Person {
  id: number;
  name: string;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
}

export interface PageResponse<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

@Injectable()
export class BackendApi {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://contado-backend-26647667439.europe-west1.run.app/prueba'; // o environment.apiUrl

  getStatus(page: number = 0, size: number = 20): Observable<PageResponse<Person>> {

    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Person>>(this.baseUrl, { params });
  }
}
