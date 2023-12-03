import { ChangeDetectionStrategy, Component, Injector, NgZone, inject } from '@angular/core';
import { HeaderService } from './services/header-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title:string;
  constructor(private header:HeaderService)
  {
    this.title = "yesus-projects";
  }

  doSomething()
  {

  }
}
