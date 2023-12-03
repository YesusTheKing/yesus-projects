import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterService } from './services/router-service.service';
import { HeaderService } from './services/header-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RouterService,HeaderService],
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
