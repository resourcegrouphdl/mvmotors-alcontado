import { MotocicletaInicio } from './models';

export const MOTOS_MOCK: { total: number; nombres: MotocicletaInicio[] } = {
  total: 3,
  nombres: [
    {
      id: '1',
      marca: 'Honda',
      modelo: 'XR150',
      categoria: 'Dual Sport',
      imagen_principal: '',
      precio: '7500',
      stock: '12'
    },
    {
      id: '2',
      marca: 'Yamaha',
      modelo: 'R15',
      categoria: 'Sport',
      imagen_principal: '',
      precio: '15500',
      stock: '3'
    },
    {
      id: '3',
      marca: 'Bajaj',
      modelo: 'NS200',
      categoria: 'Street',
      imagen_principal: '',
      precio: '9500',
      stock: '5'
    }
  ]
};
