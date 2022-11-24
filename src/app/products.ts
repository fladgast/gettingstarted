export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Nokia 3310',
    price: 199,
    description: 'Built like a tank'
  },
  {
    id: 5,
    name: 'Ericsson GH 388',
    price: 899,
    description: 'Perfection in shape of a phone'
  }
];
