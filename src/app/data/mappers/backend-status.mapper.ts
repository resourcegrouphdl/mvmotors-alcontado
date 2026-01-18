import { BackendStatus } from '../../core/models/backend-status.model';
import {PageResponse} from '../api/backend.api';
import {motoUnited} from '../../features/slider-card/models';



export function mapBackendStatus(
  res: PageResponse<motoUnited>
): BackendStatus {
  return {
    content: res.content,
    totalElements: res.totalElements
  };
}
