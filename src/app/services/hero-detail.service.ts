import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {
  id: number;

  constructor() { }

  getId(route): number {
    this.id = +route.snapshot.paramMap.get('id');
    if (this.id === 0) {
      this.id = 2;
    }
    return this.id;
  }
}
