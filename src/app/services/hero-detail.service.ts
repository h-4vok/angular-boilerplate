import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {
  id: number;

  constructor() { }

  getId(route): number {

    this.id = +route.snapshot.paramMap.get('id');

    return this.id;
  }

  /*
    getId(): number {
      console.log(this.activatedRoute.snapshot.params);
      this.id = +this.activatedRoute.snapshot.params['id'];
      return this.id;
    }
  */


}
