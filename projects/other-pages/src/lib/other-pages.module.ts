import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page1Module } from './pages/page1/page1.module';
import { Page2Component } from './pages/page2/page2.component';
import { Page2Module } from './pages/page2/page2.module';

@NgModule({
  declarations: [],
  imports: [
    Page1Module,
    Page2Module,
    RouterModule.forChild([
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]),
  ],
  exports: [],
})
export class OtherPagesModule {}
