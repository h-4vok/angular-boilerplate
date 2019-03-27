import { Component, OnInit } from '@angular/core';
import Hero from '../../models/Hero';
import { HeroService } from '../hero.service';
import { NotificationService } from '../services/notification.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private notificationService: NotificationService,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getFile() {
    /*Example File Name */
    const fileName = `test`;
    /*Example pdf File Url to test  */
    const url = 'http://www.axmag.com/download/pdfurl-guide.pdf';
    this.fileService.onDown(url, fileName);
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(data => this.heroes = data.slice(1, 5));
  }
  toastTest(hero) {
    this.notificationService.showSuccess(hero, ' Hero Detail');
  }
}
