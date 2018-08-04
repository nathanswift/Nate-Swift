import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ServicesComponent } from './components/services/services.component';
import { WorksComponent } from './components/works/works.component';
import { Parallax2Component } from './components/parallax2/parallax2.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { BottomWidgetComponent } from './components/bottom-widget/bottom-widget.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    AboutComponent,
    ParallaxComponent,
    ServicesComponent,
    WorksComponent,
    Parallax2Component,
    TeamComponent,
    ContactComponent,
    BottomWidgetComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    ContactUsComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
