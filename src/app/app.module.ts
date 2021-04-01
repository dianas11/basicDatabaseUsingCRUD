import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { firebaseConfig } from './CONFIG/firebase.config';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {CrudService} from './service/crud.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
    
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
