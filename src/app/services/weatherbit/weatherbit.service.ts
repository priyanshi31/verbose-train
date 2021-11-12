import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherbitService {

  constructor(private http: HttpClient) { }

  getWeatherDataForCity(city: string) {
    const weatherApiUrl = environment.weatherApiUrl;
    const weatherApiKey = environment.weatherApiKey;
    const url = `${weatherApiUrl}?city=${city}&key=${weatherApiKey}&days=5`;
    return this.http.get<any>(url);
  }
}
