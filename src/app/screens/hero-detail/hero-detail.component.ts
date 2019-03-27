import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import Hero from '../../models/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute, private heroService: HeroService,
    private location: Location, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    console.log(this.route);
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  showToast() {
    this.notificationService.showWarning('return dashboard', 'Close Hero Detail');
  }
  goBack() {
    this.location.back();
    this.showToast();
  }
}
