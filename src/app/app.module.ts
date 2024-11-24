import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importação necessária
import { LoginFormComponent } from './components/loginform/loginform.component';
import { SignupFormComponent } from './components/signupform/signupform.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    SignupFormComponent, // Declare o componente aqui
    LoginFormComponent,  // Declare este também
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule para suportar [(ngModel)]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
