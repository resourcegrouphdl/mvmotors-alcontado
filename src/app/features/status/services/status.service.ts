import { Injectable } from '@angular/core';
import { BackendRepository } from '../../../core/repository/backend.repository';
import { Observable } from 'rxjs';
import { BackendStatus } from '../../../core/models/backend-status.model';
import {BackendApi, PageResponse} from '../../../data/api/backend.api';
import {motoUnited} from '../../slider-card/models';

@Injectable({ providedIn: 'root' })
export class StatusService {
  constructor(private readonly repo: BackendRepository) {}


  getStatus(): Observable<PageResponse<motoUnited>> {
    return this.repo.getStatus();
  }
}
