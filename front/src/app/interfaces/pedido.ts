import { Menu } from './Menu';

export class Pedido {
    _id: string;
    name: string;
    lastName: string;
    price: string;
    hour: string;
    phone: string;
    state: string;
    email: string;
    menus: Menu[];

    constructor() { }
  }
