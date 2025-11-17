import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';


import { BackendRepository } from '../../core/repository/backend.repository';
import { BackendStatus } from '../../core/models/backend-status.model';
import { BackendApi } from '../api/backend.api';
import { mapBackendStatus } from '../mappers/backend-status.mapper';

@Injectable()
export class BackendRepositoryImpl implements BackendRepository {

  constructor(private readonly api: BackendApi) {}

  getStatus(): Observable<BackendStatus> {
    return this.api.getStatus().pipe(
      map(res => mapBackendStatus(res))
    );
  }
}
