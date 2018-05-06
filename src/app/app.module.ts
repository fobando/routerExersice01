import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SayLightComponent } from './components/say-light/say-light.component';
import { SayDynamicBoldComponent } from './components/say-dynamic-bold/say-dynamic-bold.component';

const appRoutes: Routes = [
  { path: 'sayLight', component: SayLightComponent },
  { path: 'sayBold/:text', component: SayDynamicBoldComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayDynamicBoldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
