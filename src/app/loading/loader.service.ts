import { Injectable } from '@angular/core';
import { LoaderState } from './loader';

@Injectable()
export class LoaderService {

	loader:LoaderState;
	constructor() { }
	show() {
		this.loader.show=true;
		console.log("service show");
	}
	hide() {
		this.loader.show=false;
	}	
}
