import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [{ path: '', component: WeatherComponent }];

@NgModule({
	declarations: [WeatherComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WeatherDetailsModule {
	constructor(private router: Router) {
		this.router.config.push({
			path: 'weather-details/forecast',
			component: WeatherComponent,
		});
	}
}
