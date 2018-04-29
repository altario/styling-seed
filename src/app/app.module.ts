// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxSelectModule } from 'ngx-select-ex';
import { Daterangepicker } from 'ng2-daterangepicker';
import { TagInputModule } from 'ngx-chips';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { StarRatingModule } from 'angular-star-rating';

// app
import { AppComponent } from './app.component';



// components --------------------

// components: colors
import { ColorsComponent } from './components/colors/colors.component';

// components: typography
import { TypographyComponent } from './components/typography/typography.component';

// components: buttons
import { ButtonsComponent } from './components/buttons/buttons.component';

// components: forms
import { FieldsComponent } from './components/forms/fields/fields.component';
import { NgxSelectComponent } from './components/forms/ngx-select/ngx-select.component';
import { Ng2DaterangepickerComponent } from './components/forms/ng2-daterangepicker/ng2-daterangepicker.component';
import { NgxSearchComponent } from './components/forms/ngx-search/ngx-search.component';
import { FormsTextareaComponent } from './components/forms/forms-textarea/forms-textarea.component';
import { FormsCheckboxRadioToggleComponent } from './components/forms/forms-checkbox-radio-toggle/forms-checkbox-radio-toggle.component';
import { NgxChipsComponent } from './components/forms/ngx-chips/ngx-chips.component';

// components: grid
import { GridComponent } from './components/grid/grid.component';

// components: modals
import { ModalsComponent } from './components/modals/modals.component';

// components: nav
import { NavComponent } from './components/nav/nav.component';

// components: sidebar
import { SidebarComponent } from './components/sidebar/sidebar.component';

// components: notifications
import { NotificationsComponent } from './components/notifications/notifications.component';

// page-components: footer
import { FooterComponent } from './components/footer/footer.component';



// page-components --------------------

// page-components: job
import { JobComponent } from './page-components/job/job.component';

// page-components: avatar
import { AvatarComponent } from './page-components/avatar/avatar.component';

// page-components: panels
import { PanelsComponent } from './components/panels/panels.component';

// components: accordion
import { AccordionComponent } from './components/accordion/accordion.component';

// components: filters
import { FiltersComponent } from './components/filters/filters.component';


// simple routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },



  // components --------------------

  // components: colors
  { path: 'colors', component: ColorsComponent },

  // components: typography
  { path: 'typography', component: TypographyComponent },

  // components: typography
  { path: 'buttons', component: ButtonsComponent },

  // components: forms
  { path: 'forms', component: FieldsComponent },
  { path: 'ngx-select', component: NgxSelectComponent },
  { path: 'ng2-daterangepicker', component: Ng2DaterangepickerComponent },
  { path: 'ngx-search', component: NgxSearchComponent },
  { path: 'forms-textarea', component: FormsTextareaComponent },
  { path: 'forms-checkbox-radio-toggle', component: FormsCheckboxRadioToggleComponent },
  { path: 'ngx-chips', component: NgxChipsComponent },

  // components: grid
  { path: 'grid', component: GridComponent },

  // components: notifications
  { path: 'notifications', component: NotificationsComponent },

  // components: modals
  { path: 'modals', component: ModalsComponent },

  // components: nav
  { path: 'nav', component: NavComponent },

  // components: sidebar
  { path: 'sidebar', component: SidebarComponent },

  // components: panels
  { path: 'panels', component: PanelsComponent },

  // components: accordion
  { path: 'accordion', component: AccordionComponent },

  // components: footer
  { path: 'footer', component: FooterComponent },

  // components: filters
  { path: 'filters', component: FiltersComponent },



  // page-components --------------------

  // page-components: job
  { path: 'job', component: JobComponent },

  // page-components: avatar
  { path: 'avatar', component: AvatarComponent },
];


@NgModule({
  declarations: [
    AppComponent,

    // page-components --------------------

    // page-components: job
    JobComponent,

    // page-components: avatar
    AvatarComponent,



    // layout --------------------

    // layout: modal
    ModalsComponent,

    // layout: nav
    NavComponent,

    // layout: sidebar
    SidebarComponent,

    // layout: panels
    PanelsComponent,

    // layout: accordion
    AccordionComponent,

    // layout: footer
    FooterComponent,

    // layout: filters
    FiltersComponent,



    // components --------------------

    // components: colors
    ColorsComponent,

    // components: typography
    TypographyComponent,

    // components: buttons
    ButtonsComponent,

    // components: forms
    FieldsComponent,
    NgxSelectComponent,
    Ng2DaterangepickerComponent,
    NgxSearchComponent,
    FormsTextareaComponent,
    FormsCheckboxRadioToggleComponent,

    // components: grid
    GridComponent,

    // notifications
    NotificationsComponent,

    // ngx-chips
    NgxChipsComponent,

    // accordion
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    StarRatingModule.forRoot(),
    TagInputModule,
    BrowserAnimationsModule,
    NgxSelectModule,
    Daterangepicker,

    // routes
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  // exports: [
  //   BsDropdownModule,
  //   TooltipModule,
  //   ModalModule,
  //   AlertModule,
  //   AccordionModule,
  //   StarRatingModule.forRoot()
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
