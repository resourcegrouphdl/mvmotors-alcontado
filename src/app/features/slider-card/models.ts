export interface MotocicletaInicio {
  id: string;
  marca?: string;
  modelo?: string;
  categoria?: string;
  imagen_principal?: string;
  precioWeb?: string; //id del precio en la tabla de precios
  precio?: string; //id del precio en la tabla de precios
  stock?: string; //id del stock en la tabla de stock
  destacado?: string;
  promociones?: string[]; //id de las promociones en la tabla de promociones
  precioInicial?: string; //id del precio inicial en la tabla de precios
}
