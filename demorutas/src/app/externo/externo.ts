import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-externo',
  imports: [],
  templateUrl: './externo.html',
  styleUrl: './externo.css',
})
export class Externo {
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    console.log(params["miparam"]);
  });
}
}
