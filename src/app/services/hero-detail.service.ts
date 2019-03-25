import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      // tslint:disable-next-line:ter-arrow-parens
      params => {
        this.id = +params.get('id');
      }
    );

  }

  getId(): number {
    return this.id;
  }


}
