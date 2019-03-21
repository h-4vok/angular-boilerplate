import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';


storiesOf('Button Example', module)
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }))
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Components Example', module)
  .add('Dashboard', () => ({
    component: DashboardComponent,
    props: {},
  }))
  .add('Message', () => ({
    component: MessagesComponent,
    props: { "messageService": { "messages": ["mensaje1", "mensaje2"] } },
  }))
  .add('heroes', () => ({
    component: HeroesComponent,
    props: {},
  }))
  .add('hero-detail', () => ({
    component: HeroDetailComponent,
    props: {},
  }));
