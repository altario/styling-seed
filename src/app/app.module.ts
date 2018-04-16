// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// ngx
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxSelectModule } from 'ngx-select-ex';
import { Daterangepicker } from 'ng2-daterangepicker';

// app
import { AppComponent } from './app.component';

// page components
import { JobComponent } from './page-components/job/job.component';
import { AvatarComponent } from './page-components/avatar/avatar.component';

// components
import { ColorsComponent } from './components/colors/colors.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsComponent } from './components/forms/forms.component';
import { NgxSelectComponent } from './components/ngx-select/ngx-select.component';
import { Ng2DaterangepickerComponent } from './components/ng2-daterangepicker/ng2-daterangepicker.component';
import { NgxSearchComponent } from './components/ngx-search/ngx-search.component';
import { FormsTextareaComponent } from './components/forms-textarea/forms-textarea.component';
import { FormsCheckboxRadioToggleComponent } from './components/forms-checkbox-radio-toggle/forms-checkbox-radio-toggle.component';
import { GridComponent } from './components/grid/grid.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NavComponent } from './components/nav/nav.component';


// simple routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },

  // components
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'ngx-select', component: NgxSelectComponent },
  { path: 'ng2-daterangepicker', component: Ng2DaterangepickerComponent },
  { path: 'ngx-search', component: NgxSearchComponent },
  { path: 'forms-textarea', component: FormsTextareaComponent },
  { path: 'forms-checkbox-radio-toggle', component: FormsCheckboxRadioToggleComponent },
  { path: 'grid', component: GridComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'nav', component: NavComponent },

  // page components
  { path: 'job', component: JobComponent },
  { path: 'avatar', component: AvatarComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AvatarComponent,
    ColorsComponent,
    TypographyComponent,
    ButtonsComponent,
    FormsComponent,
    NgxSelectComponent,
    Ng2DaterangepickerComponent,
    NgxSearchComponent,
    FormsTextareaComponent,
    FormsCheckboxRadioToggleComponent,
    GridComponent,
    ModalsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    PopoverModule.forRoot(),
    NgxSelectModule,
    Daterangepicker,

    // routes
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
