import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  public name: string;
  
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
