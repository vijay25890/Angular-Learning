import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  constructor() {}
  users() {
    return [
      {
        name: 'vijay',
        age: 24,
      },
      {
        name: 'vijay1',
        age: 24,
      },
      {
        name: 'vijay2',
        age: 24,
      },
    ];
  }
}
