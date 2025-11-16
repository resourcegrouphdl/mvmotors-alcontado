import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BackendStatusResponse {
  campoPrueba: string;
}

@Injectable()
export class BackendApi {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://contado-backend-26647667439.europe-west1.run.app'; // o environment.apiUrl

  getStatus(): Observable<BackendStatusResponse> {
    return this.http.get<BackendStatusResponse>(`${this.baseUrl}`);
  }
}
