import { BackendStatus } from '../../core/models/backend-status.model';
import {PageResponse, Person} from '../api/backend.api';



export function mapBackendStatus(res: PageResponse<Person>): BackendStatus {
  return {
    nombres: res.content.map(item => item.name),
    total: res.totalElements
  };
}
