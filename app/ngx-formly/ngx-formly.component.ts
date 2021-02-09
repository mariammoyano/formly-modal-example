import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ngx-formly',
  templateUrl: './ngx-formly.component.html',
  styleUrls: ['./ngx-formly.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxFormlyComponent {

  form = new FormGroup({});

  model = {
    id: 123,
    name: 'Bazooka Joe',
    dateOfBirth: '2001-01-01T05:00:00.000Z'
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'id'
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name',
      }
    },
    {
      key: 'dateOfBirth',
      type: 'datepicker',
      templateOptions: {
        required: true,
        label: 'Date Of Birth',
      }      
    },
  ];

  constructor(
    private dialogRef: MatDialogRef<NgxFormlyComponent>,
  ) { }

  submit() {
    this.dialogRef.close(this.form.value);
  } 
}