import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceListComponent,
    CreateServiceComponent,
    EditServiceComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ContractListComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
