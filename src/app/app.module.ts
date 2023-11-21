import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  moduleName:string;
  moduleId:number;
  isRootModule:boolean;
  constructor()
  {
    this.moduleName = "AppModule";
    this.moduleId = 1;
    this.isRootModule = true;
  }
}
