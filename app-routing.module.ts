import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { AuthGuard } from './auth/auth.guard';
import { AzureComponent } from './azure/azure.component';
import { ChartTesterComponent } from './chart-tester/chart-tester.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomersComponent } from './customers/customers.component';
import { DeveloperComponent } from './developer/developer.component';
import { DevquizComponent } from './devquiz/devquiz.component';
import { DouughnutChartComponent } from './douughnut-chart/douughnut-chart.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { JwtComponent } from './jwt/jwt.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Pie2Component } from './pie2/pie2.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ProductsComponent } from './products/products.component';
import { SalesTrackerComponent } from './sales-tracker/sales-tracker.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SkillsComponent } from './skills/skills.component';
import { ThreejsComponent } from './threejs/threejs.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'jwt', component: JwtComponent },
  { path: 'devquiz', component: DevquizComponent },
  { path: 'azure', component: AzureComponent },
  { path: 'devquiz', component: DevquizComponent },
  { path: 'all-charts', component: AllChartsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'sales-tracker', component: SalesTrackerComponent },
  { path: 'threejs', component: ThreejsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'doughnut', component: DouughnutChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'pie2', component: Pie2Component },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'chart-tester', component: ChartTesterComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, 
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0,0],
    anchorScrolling: 'enabled', 
    useHash: true,
    initialNavigation:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
