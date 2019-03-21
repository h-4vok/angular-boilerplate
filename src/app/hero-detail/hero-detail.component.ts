import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Hero from '../../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  goBack = () => this.location.back();

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

}
