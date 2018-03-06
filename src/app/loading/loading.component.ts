import { Component, OnInit, Input, OnChanges,SimpleChanges  } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderState } from './loader';
declare var $;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnChanges  {
  @Input() show: boolean;

  constructor( ) { }
  ngOnChanges(changes: SimpleChanges) {
    this.toggle();
    console.log("change")
  }    
  ngOnInit() {
  		
  }
  toggle(){
  	this.show==true?this.display():this.hide();
  }
  display(){
  	console.log("displyed");
  	$("#myModal").modal('show');
  }
  hide(){
  	console.log("hidden");
  	$("#myModal").modal('hide');
  }
}
