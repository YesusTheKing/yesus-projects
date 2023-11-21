import { Component, Injector } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  constructor(private inject:Injector)
  {
    this.title = "yesus-projects";
    console.log(inject.get(AppModule))
    console.log(inject.get)
  }
}
