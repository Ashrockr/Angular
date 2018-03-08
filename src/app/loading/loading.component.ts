import { Component, OnInit, Input, OnChanges,SimpleChanges  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
  }    
  ngOnInit() {
  		
  }
  toggle(){
  	this.show==true?this.display():this.hide();
  }
  display(){
  	$("#myModal").modal('show');
  }
  hide(){
  	$("#myModal").modal('hide');
  }
}
