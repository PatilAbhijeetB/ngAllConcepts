import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AttriDirDirective } from './attri-dir.directive';
import { CustomDirectiveExample } from './color-directive/color-directive-example.component';
import { ColorDirective } from './color-directive/color.directive';
import { NavVomponentComponent } from './nav-vomponent/nav-vomponent.component';
import { AppRouterModule,appComponents } from "./app-route.Module";
import { BlogDetailComponent } from './blog-detail-component/blog-details.component';
import { BlogListComponent } from './blog-list-component/blog-list.component';
import { ParentCompomentComponent } from './parent-compoment/parent-compoment.component';
import { ChildComponentComponent } from './child-component/child-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectiveComponent,
    AttriDirDirective,
    CustomDirectiveExample,
    ColorDirective,
    NavVomponentComponent,
    BlogDetailComponent,
    BlogListComponent,
    ParentCompomentComponent,
    ChildComponentComponent
    

   
   
    
  ],

  imports: [
    BrowserModule, FormsModule ,AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
