import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';

import { BlogmanagerService } from './services/blogmanager.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogpageComponent } from './components/blogpage/blogpage.component';
import { BlogmanComponent } from './components/blogman/blogman.component';
import { EmailComponent } from './components/email/email.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavigationComponent,
    JumbotronComponent,
    FooterComponent,
    BlogpageComponent,
    BlogmanComponent,
    EmailComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    QuillModule,
    AppRoutingModule
  ],
  providers: [
    BlogmanagerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
