import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {RouterModule, Routes} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateService } from './services/validate.service';
import { EditMenuService } from './services/editmenu.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminpComponent } from './components/adminp/adminp.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { TestComponent } from './components/test/test.component';
import {MatSortModule} from '@angular/material/sort';
import { TesthComponent } from './components/testh/testh.component';
import {MatGridListModule} from '@angular/material/grid-list';



/// import {
//   MatTableModule,
//   MatProgressSpinnerModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatButtonModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatToolbarModule,
// } from '@angular/material';

const appRoutes: Routes = [
  // {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
 {path:'admin', component: EditMenuComponent},
 {path:'login', component: LoginadminComponent},
 {path:'adminp', component: AdminpComponent},
 {path:'reservation', component: ReservationComponent},
 {path:'test', component: TestComponent},
 {path:'testh', component: TesthComponent},
  {path:'', component: TesthComponent},







]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    EditMenuComponent,
    LoginadminComponent,
    AdminpComponent,
    ReservationComponent,
    TestComponent,
    TesthComponent
    
      ],
  imports: [   
     FormsModule,
     HttpModule,
     NgbModule,
     FontAwesomeModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     HttpClientModule,
     FlashMessagesModule.forRoot(),
     RouterModule.forRoot(appRoutes),
     MDBBootstrapModule.forRoot(),
     MatTableModule,
     MatProgressSpinnerModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatToolbarModule,
     MatSelectModule,
     MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatGridListModule

    //NgbModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [ValidateService, EditMenuService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
