import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './View/Pages/Cart/cart-component/cart.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthModule } from './View/Components/auth/auth.module';
import { BlogModule } from './View/Components/blog/blog.module';
import { LayoutModule } from './View/Components/layout/layout.module';
import { LegalModule } from './View/Components/legal/legal.module';
import { MiscelaneusModule } from './View/Components/miscelaneus/miscelaneus.module';
import { StoreModule } from './View/Components/store/store.module';
import { UserModule } from './View/Components/user/user.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';






@NgModule({
    declarations: [
        AppComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        AuthModule,
        BlogModule,
        LayoutModule,
        LegalModule,
        MiscelaneusModule,
        StoreModule,
        UserModule,
        MatProgressBarModule
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
