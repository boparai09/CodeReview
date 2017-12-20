import { Component, OnInit } from '@angular/core';

import { AuthorsService } from './authors.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private authors: any;
  private loading: boolean = true;
  constructor(private authorsService: AuthorsService) {}

  ngOnInit() {
    this.authorsService.get()
    .subscribe(
        data => {
            this.authors= data;
            this.loading = false;
        },
        error => {
            this.loading = false;
        });
  }

}
