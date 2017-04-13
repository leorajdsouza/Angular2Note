import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Add } from './add';

@NgModule({
  declarations: [
    Add,
  ],
  imports: [
    //IonicModule.forChild(Add),
  ],
  exports: [
    Add
  ]
})
export class AddModule {}
