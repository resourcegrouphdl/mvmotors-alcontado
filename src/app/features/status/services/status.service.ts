import { Injectable } from '@angular/core';
import { BackendRepository } from '../../../core/repository/backend.repository';
import { Observable } from 'rxjs';
import { BackendStatus } from '../../../core/models/backend-status.model';

@Injectable({ providedIn: 'root' })
export class StatusService {

  constructor(private readonly backendRepo: BackendRepository) {}

  getStatus(): Observable<BackendStatus> {
    return this.backendRepo.getStatus();
  }
}

