import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ListingsComponent } from './listings/listings.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCmYAzjzJRKE8aMWpBAqpEnlDSeuxur9M8",
      authDomain: "studentroom-f4ec0.firebaseapp.com",
      projectId: "studentroom-f4ec0",
      storageBucket: "studentroom-f4ec0.appspot.com",
      messagingSenderId: "775340784871",
      appId: "1:775340784871:web:8b8ba6530ec4a269423642",
      measurementId: "G-CW6N4C57BN"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
