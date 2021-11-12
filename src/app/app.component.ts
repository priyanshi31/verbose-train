import { Component } from '@angular/core';
import { WeatherbitService } from './services/weatherbit/weatherbit.service';
import { DateUtilService } from './services/date-util/date-util.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  selectedCity = '';
  isLoading = false;
  weatherDataView = [];

  constructor(
    private weatherbitService: WeatherbitService,
    private dateUtilService: DateUtilService) {}

  cityChanged() {
    if(this.selectedCity) {
      this.isLoading = true;
      this.weatherDataView = [];
      this.weatherbitService.getWeatherDataForCity(this.selectedCity)
        .pipe(
          finalize(() => this.isLoading = false)
        )
        .subscribe(data => {
          const weatherData = data['data'];
          this.weatherDataView = weatherData.map(data => {
            return {
              day: this.dateUtilService.getDay(data?.datetime),
              date: this.dateUtilService.getDate(data?.datetime),
              icon: data?.weather?.icon,
              description: data?.weather?.description
            }
          })
        }, err => {
          console.log(`Unable to get data from weatherbit: ${err}`);
        })
    }
  }
}
