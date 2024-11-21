import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { environment } from '../environments/environment';
import { ProjectsService } from './projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'cv', component: ProjectsComponent },
      { path: 'person', component: PersonComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
