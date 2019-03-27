import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesComponent } from './screens/heroes/heroes.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HeroDetailService } from './services/hero-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      positionClass: 'toast-top-center',
      toastClass: 'ngx-toastr toast-notification',
      titleClass: 'toast-notification title-toast',
      messageClass: 'toast-notification message-toast'
    })
  ],
  providers: [HeroDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
