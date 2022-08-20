import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { UsdToInrPipe } from '../usd-to-inr.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserDetailsComponent,
    ChildComponent,
    UsdToInrPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
