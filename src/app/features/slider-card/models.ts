export interface MotocicletaInicio {
  content?: motoUnited[];
  pageable?: any;
  totalPages?: number;
  totalElements?: number;
  last?: boolean;
  first?: boolean
  size?: number;
  sort?: any;
  numberOfElements?: number;
  empty?: string;
}

export interface motoUnited {
  id: number;
  placa: string;
  imagenes?: string[];
  idmoto: string;
  precio: string;
  anio: string;
  descripcion: string;
  estado: string;
}

