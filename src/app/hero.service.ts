import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import Hero from '../models/Hero';
import mockHeroes from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return of(mockHeroes);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetching hero id ${id}`);
    return of(mockHeroes.find(x => x.id === id));
  }

}
