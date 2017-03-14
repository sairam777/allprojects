import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SignupComponent} from './components/signupcomponent/signup.component';
const appRoutes: Routes=[

   {
    path:'signup',
    component:SignupComponent
  }
]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
