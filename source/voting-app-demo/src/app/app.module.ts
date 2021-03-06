import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { FormControl, Validators } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { VotingComponent } from './voting/voting.component';
import { ResultsComponent } from './results/results.component';

import { AuthService } from './auth/auth.service';
import { EvotingService } from './shared/evoting.service';
import { EmailService } from "../app/shared/email.service"
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ToolbarComponent,
    MainwindowComponent,
    VotingComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, EvotingService, EmailService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
