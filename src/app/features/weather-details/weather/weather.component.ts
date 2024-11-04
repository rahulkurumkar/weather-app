import { Component, OnInit } from '@angular/core';
import { WeatherCommunicationService } from '../../../services/weather-communication.service';

@Component({
	selector: 'app-weather',
	template: `
		<h2>Weather Details</h2>
		<p *ngIf="city">Displaying weather for {{ city }}</p>
		<p *ngIf="!city">No city selected. Please search for a city.</p>
	`,
})
export class WeatherComponent implements OnInit {
	city: string | null = null;

	constructor(private weatherService: WeatherCommunicationService) {}

	ngOnInit(): void {
		this.weatherService.currentCity.subscribe(city => (this.city = city));
	}
}
