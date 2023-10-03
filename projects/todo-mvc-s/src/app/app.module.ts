import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoPreloading, RouterModule } from '@angular/router';
// App is our top level component
import { AppComponent } from './app.component';
/*
 * Platform and Environment providers/directives/pipes
 */
import { appRoutes } from './app.routes';
// Shared module reexporting all external libaries required todo a todo component

import { environment } from '../environments/environment';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, {
        useHash: false,
        preloadingStrategy: NoPreloading,
        enableTracing: !environment.production
    })],
})
export class AppModule {

}
