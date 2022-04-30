import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TableComponent } from './components/table/table.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
@NgModule({
  declarations: [AppComponent, LoaderComponent, ChartComponent, TableComponent, PageMainComponent],
  imports: [BrowserModule, HttpClientModule,NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
