import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fiveDayWeather = [];

  constructor(private weatherAPIService: WeatherApiService) { }

  getWeather(zipcode: string): void {

    // store response in json variable
    this.weatherAPIService.getWeather(zipcode)
      .subscribe(response => {
        console.log(response);
        for (let i = 0; i < 5; i++) {
          this.fiveDayWeather.push(response.list[i].main.temp);
        }
      })
  }
}
