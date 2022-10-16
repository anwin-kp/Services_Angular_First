import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { SecpageComponent } from './secpage/secpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { CustpipesPipe } from './custpipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    DemopipesComponent,
    SecpageComponent,
    ThirdpageComponent,
    CustpipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
