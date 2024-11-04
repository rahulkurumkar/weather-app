import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherCommunicationService } from './services/weather-communication.service';

@Component({
	selector: 'app-root',
	template: `
		<h1>Weather App</h1>
		<mat-form-field appearance="fill">
			<mat-label>Enter City</mat-label>
			<input matInput (keyup.enter)="searchWeather()" [(ngModel)]="city" />
		</mat-form-field>
		<button mat-raised-button color="primary" (click)="searchWeather()">Get Weather</button>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent {
	city: string = '';

	constructor(private weatherService: WeatherCommunicationService, private router: Router) {}

	searchWeather() {
		if (this.city) {
			this.weatherService.setCity(this.city);
			this.router.navigate(['/weather-details']);
		}
	}
}
