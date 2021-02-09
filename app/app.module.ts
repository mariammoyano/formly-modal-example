import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatDialogModule, MatInputModule } from '@angular/material';
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { AppComponent } from './app.component';
import { NgxFormlyComponent } from './ngx-formly/ngx-formly.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    MatNativeDateModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    NgxFormlyComponent,
  ],
  entryComponents: [
    NgxFormlyComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
