import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FileSaverModule } from 'ngx-filesaver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesComponent } from './screens/heroes/heroes.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

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
    FileSaverModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      positionClass: 'toast-top-center',
      toastClass: 'ngx-toastr toast-notification',
      titleClass: 'toast-notification title-toast',
      messageClass: 'toast-notification message-toast'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
