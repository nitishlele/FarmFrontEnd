import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from '../app/product/products/products.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailComponent} from './product/product-detail/product-detail.component';
import { ProductEditComponent} from './product/product-edit/product-edit.component';
import  { RegisterComponent} from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { FarmerComponent } from './farmer/farmer.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FarmerAddComponent } from './farmer-add/farmer-add.component';
import { Company2Component } from './company2/company2.component';
import { LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompdashboardComponent } from './compdashboard/compdashboard.component';
import { HelpComponent } from './help/help.component';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { SellComponent } from './sell/sell.component';
import { CompproductsComponent } from './compproducts/compproducts.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'product-details',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Add Product' }
  },
  {
    path: 'sell',
    component: SellComponent,
    data: { title: 'Sell Product' }
  },
  {
    path: 'product-edit',
    component: ProductEditComponent,
    data: { title: 'Add Product' }
  },
 {
    path: 'register/:role',
    component: RegisterComponent
  },
  {
  path: 'company-add',
  component: CompanyComponent,
  data: { title: 'List of company' }
},
{
  path: 'help',
  component: HelpComponent,
  data: { title: 'Help' }
},
{
    path: 'farmer',
    component: FarmerComponent,
    data: { title: 'farmer' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'profile' }
  },
  
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'service' }
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { title: 'help' }
  },
  {
    path: 'dashboard',
    
    component: DashboardComponent,
    data: { title: 'dashboard' }
  },
  {
    path: 'dashboardcontent',
    component: DashboardcontentComponent,
    data: { title: 'dashboard' }
  },
  {
    path: 'compdashboard',
    component: CompdashboardComponent,
    data: { title: 'compdashboard' }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: { title: 'footer' }
  },
  {
    path: 'compproducts',
    component: CompproductsComponent,
    data: { title: 'compproducts' }
  },
  {

  path: 'farmer-add',
  component: FarmerAddComponent,
  data: { title: 'List of company' }
},
{
  path: 'company2',
  component: Company2Component,
  data: { title: 'company2' }
},

{
    path:'login',
    component: LoginComponent,
    data: {title: 'Add Medicine'}
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    data: { title: 'sidebar' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
