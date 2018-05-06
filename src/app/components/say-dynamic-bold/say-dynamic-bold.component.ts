import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {
  public text: string;
  private route$: Subscription;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
       this.route$ = this.route.params.subscribe(
         (params) => {
        this.text = params['text'];
  });
  }
}
