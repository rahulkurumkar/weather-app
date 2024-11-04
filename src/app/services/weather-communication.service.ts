import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WeatherCommunicationService {
	private citySource = new BehaviorSubject<string | null>(null);
	currentCity = this.citySource.asObservable();

	setCity(city: string) {
		this.citySource.next(city);
	}
}
