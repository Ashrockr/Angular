import { Component, OnInit,Injectable } from '@angular/core';
declare var $;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
@Injectable()
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  }

  show(){
  	$('#myModal').modal('show');
  }
  hide(){
  	$('#myModal').modal('hide');
  }

}
