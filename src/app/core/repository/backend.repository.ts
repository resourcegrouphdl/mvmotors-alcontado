import { Observable } from 'rxjs';
import { BackendStatus } from '../models/backend-status.model';
import {PageResponse} from '../../data/api/backend.api';
import {motoUnited} from '../../features/slider-card/models';

export abstract class BackendRepository {
  abstract getStatus(): Observable<PageResponse<motoUnited>>;


}

