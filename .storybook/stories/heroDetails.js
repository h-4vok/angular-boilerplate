import { storiesOf } from '@storybook/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { moduleMetadata } from '@storybook/angular';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { APP_BASE_HREF } from '@angular/common';

const hero2 = {
  id: 1,
  name: 'Mr.Nice'
};


storiesOf('Components Example', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        MessagesComponent
      ],
      imports: [AppRoutingModule, ToastrModule.forRoot({
        timeOut: 3000,
        preventDuplicates: true,
      })],
      providers: [{ provide: APP_BASE_HREF, useValue: '../../src' }]
    })
  )
  .add('hero-detail', () => ({
    component: HeroDetailComponent,
    path: 'detail/2',
    props: {
      'hero': hero2,
      'id': 2,
      'name': 'test'
    },
    data: {
      hero: [{ id: "2", name: "Canada" }],
    },
  }));
