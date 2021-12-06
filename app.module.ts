import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user/shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

// add the following 2 modules to the new site
import { ValidatorModule } from './shared/validator.module';
import { FilterPipe } from './shared/filter-pipe';


import { FooterComponent } from './footer/footer.component';
import { DeveloperComponent } from './developer/developer.component';
import { DevquizComponent } from './devquiz/devquiz.component';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { JwtComponent } from './jwt/jwt.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { AzureComponent } from './azure/azure.component';
import { ProductsComponent } from './products/products.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SalesTrackerComponent } from './sales-tracker/sales-tracker.component';

// sync fusion ***************************************************************
import { AccumulationChartModule, ChartModule, DataLabel, DataLabelSettings } from '@syncfusion/ej2-angular-charts';
import {
  AreaSeriesService, BarSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, MultiColoredAreaSeriesService,
  CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService
} from '@syncfusion/ej2-angular-charts';

// import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import {
  PieSeriesService, DataLabelService, FunnelSeriesService, LineSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService
} from '@syncfusion/ej2-angular-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DouughnutChartComponent } from './douughnut-chart/douughnut-chart.component';
import { Pie2Component } from './pie2/pie2.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { FunnelChartComponent } from './funnel-chart/funnel-chart.component';
import { AboutComponent } from './about/about.component';
import { LineSeriesChartComponent } from './line-series-chart/line-series-chart.component';
import { TrackballChartComponent } from './trackball-chart/trackball-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { MultiColumnComponent } from './multi-column/multi-column.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { SkillsComponent } from './skills/skills.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { FunnelChartMobileComponent } from './funnel-chart-mobile/funnel-chart-mobile.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { ChartTesterComponent } from './chart-tester/chart-tester.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    ForbiddenComponent,
    FooterComponent,
    DeveloperComponent,
    DevquizComponent,
    AllChartsComponent,
    JwtComponent,
    PipelineComponent,
    AzureComponent,
    ProductsComponent,
    ShoppingCartComponent,
    FilterPipe,
    CheckoutComponent,
    SalesTrackerComponent,
    PieChartComponent,
    DouughnutChartComponent,
    Pie2Component,
    CustomerOrdersComponent,
    FunnelChartComponent,
    AboutComponent,
    LineSeriesChartComponent,
    TrackballChartComponent,
    ColumnChartComponent,
    MultiColumnComponent,
    AreaChartComponent,
    SkillsComponent,
    NewHomeComponent,
    FunnelChartMobileComponent,
    InterviewQuestionsComponent,
    ChartTesterComponent,
  ],
  imports: [
    BrowserModule,
    AccumulationChartModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressAnimation: 'increasing',
      progressBar: true,
      timeOut: 1000
    }),
    NgxMaskModule.forRoot(options),
    ValidatorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ChartModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AreaSeriesService, BarSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, MultiColoredAreaSeriesService,
    CategoryService, DataLabelService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService, ChartAnnotationService, FunnelSeriesService,
    RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService, AccumulationTooltipService, AccumulationDataLabelService,
    PieSeriesService, AccumulationLegendService, AccumulationAnnotationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
