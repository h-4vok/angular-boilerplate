import { storiesOf } from '@storybook/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { moduleMetadata } from '@storybook/angular';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { HeroesComponent } from 'src/app/screens/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/screens/hero-detail/hero-detail.component';
import { DashboardComponent } from 'src/app/screens/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { addonAPI } from '@storybook/addons';

const id = { 'id': 2 };

storiesOf('Components Example', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent
      ],
      imports: [AppRoutingModule, ToastrModule.forRoot({
        timeOut: 3000,
        preventDuplicates: true,
      })],
      providers: [{ provide: APP_BASE_HREF, useValue: '2' }]
    })
  )
  .addParameters(id)

  .add('hero-detail', () => ({
    component: HeroDetailComponent
  }), id);
