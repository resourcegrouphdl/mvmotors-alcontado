import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';


import { BackendRepository } from '../../core/repository/backend.repository';
import { BackendStatus } from '../../core/models/backend-status.model';
import {BackendApi, PageResponse} from '../api/backend.api';

import {motoUnited} from '../../features/slider-card/models';

@Injectable()
export class BackendRepositoryImpl implements BackendRepository {

  constructor(private readonly api: BackendApi) {}

  getStatus(): Observable<PageResponse<motoUnited>> {
    return this.api.getStatus();
  }
}
