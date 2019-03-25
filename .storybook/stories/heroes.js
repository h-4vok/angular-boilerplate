import { storiesOf } from '@storybook/angular';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { APP_BASE_HREF } from '@angular/common';


storiesOf('Components Example', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent
      ],

      imports: [AppRoutingModule, ToastrModule.forRoot({
        timeOut: 3000,
        preventDuplicates: true,
      })],
      providers: [{ provide: APP_BASE_HREF, useValue: '../src' }]
    })
  )

  .add('heroes', () => ({
    component: HeroesComponent
  }))
