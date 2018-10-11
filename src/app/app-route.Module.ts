import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgModule } from '../../node_modules/@angular/core';
import { BlogDetailComponent } from './blog-detail-component/blog-details.component';
import { BlogListComponent } from './blog-list-component/blog-list.component';

@NgModule({
    imports:[RouterModule.forRoot([
        {path : "home" , component : HomeComponent},
        {path : "builtindirective" , component : StructuralDirectivesComponent},
        {path : "blogList" , component : BlogListComponent},
        {path : "blogDetails/:id" , component : BlogDetailComponent}
        ])],

    exports:[RouterModule]
})

export class AppRouterModule{

}
export const appComponents = [BlogDetailComponent, BlogListComponent]