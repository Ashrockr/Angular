import { Component, OnInit, Input  } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderState } from './loader';
declare var $;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
	
  constructor( ) { }

  ngOnInit() {
  		$("#myModal").modal('show');
  }

  

}
