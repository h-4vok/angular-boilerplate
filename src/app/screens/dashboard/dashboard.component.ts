import { Component, OnInit } from '@angular/core';
import Hero from '../../models/Hero';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(data => this.heroes = data.slice(1, 5));
  }
  toastTest(hero) {
    this.notificationService.showSuccess(hero, ' Hero Detail');
  }
}