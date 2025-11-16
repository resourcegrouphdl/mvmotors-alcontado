import { BackendStatus } from '../../core/models/backend-status.model';

export interface BackendStatusResponse {
  campoPrueba: string;
}

export function mapBackendStatus(res: BackendStatusResponse): BackendStatus {
  return {
    campoPrueba: res.campoPrueba
  };
}
