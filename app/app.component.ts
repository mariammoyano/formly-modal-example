import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxFormlyComponent } from './ngx-formly/ngx-formly.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = null;

  constructor(
    private dialog: MatDialog,
  ) { }

  openDialog() {
    // reset submitted values
    this.submitted = null;
    // open dialog
    this.dialog
      .open(NgxFormlyComponent)
      .afterClosed()
      .subscribe(result => this.submitted = result);
  }
}