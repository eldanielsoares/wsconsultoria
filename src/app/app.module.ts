import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule,
    AuthModule,
    ReactiveFormsModule,
    MainModule,
    AdminModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFireFunctionsModule
  ],
  providers: [
    ScreenTrackingService, UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
