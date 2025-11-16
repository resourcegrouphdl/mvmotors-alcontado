import { Observable } from 'rxjs';
import { BackendStatus } from '../models/backend-status.model';

export abstract class BackendRepository {
  abstract getStatus(): Observable<BackendStatus>;
}

