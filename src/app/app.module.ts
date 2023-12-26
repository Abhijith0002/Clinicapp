import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Set the position to bottom right
      preventDuplicates: true, // Prevent duplicate notifications
      timeOut: 3000, // Set the duration to 3 seconds (3000 milliseconds)
      
      
         // Add animation settings
      enableHtml: true, // Enable HTML in the message (optional)
      progressBar: true, // Show a progress bar (optional)
      progressAnimation: 'increasing', // Progress bar animation ('increasing' or 'decreasing')
      easing: 'ease-in', // Easing type for animation
      easeTime: 300, // Animation easing time in milliseconds
      closeButton: true, // Show close button (optional)
      tapToDismiss: false, // Close the notification when clicked (optional)
      toastClass: 'ngx-toastr', // Custom CSS class for the toast container (optional)
       
    }), 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
