import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: AppointmentListComponent }]),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AppointmentListComponent,
    PageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
