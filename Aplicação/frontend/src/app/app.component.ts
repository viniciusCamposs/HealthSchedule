import { LoaderService } from './core/services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home';

  constructor(
    public loaderService: LoaderService
  ) {}
}
