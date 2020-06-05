import { Menu } from './Menu';

export class Pedido {
    _id: string;
    name: string;
    email: string;
    lastName: string;
    phone: string;
    state: string;
    menus: Menu[];

    constructor() { }
  }
