import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Edit } from './edit';

@NgModule({
  declarations: [
    Edit,
  ],
  imports: [
   // IonicModule.forChild(Edit),
  ],
  exports: [
    Edit
  ]
})
export class EditModule {}
