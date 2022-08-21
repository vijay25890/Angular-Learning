import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { UsdToInrPipe } from '../usd-to-inr.pipe';
import { RedElDirective } from './red-el.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserDetailsComponent,
    ChildComponent,
    UsdToInrPipe,
    RedElDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
