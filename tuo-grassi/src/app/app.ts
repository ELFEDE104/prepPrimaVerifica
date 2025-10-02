import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponent, ThirdComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'app'
}
