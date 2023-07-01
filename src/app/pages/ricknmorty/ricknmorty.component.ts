import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from 'src/app/service/ricknmorty.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-ricknmorty',
  templateUrl: './ricknmorty.component.html',
  styleUrls: ['./ricknmorty.component.css'],
})
export class RicknmortyComponent implements OnInit {
  characters = new Array<any>();
  loading$ = this.loader.isLoading$;
  constructor(public service: RicknmortyService, public loader: LoaderService) {}

  ngOnInit(): void {
    // this.getRicknMorty();
  }

  getRicknMorty() {
    this.characters = [];
    this.service.getRicknMorty().subscribe((response) => {
      this.characters = response.results;
    });
  }
}
