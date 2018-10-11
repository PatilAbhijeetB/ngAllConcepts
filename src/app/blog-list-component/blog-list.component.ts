import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:"my-bloglist",
    templateUrl:"./blog-list.component.html"
})

export class BlogListComponent
{
    data=[
            {id:1 , imgUrl:"Url1" , title:"SEO Angular2" , descripetion:"<b> Angular</b> 2 SEO"},
            {id:2 , imgUrl:"Url2" , title:"Angular Routing" , descripetion:"<strong> Angular Routing</strong> This is routing"},
            {id:3 , imgUrl:"Url3" , title:"NodeApp" , descripetion:"<b> Node </b> Apllication"}
        ]


    constructor(private router : Router){
    }
    onBlogClick(id)
    {
    console.log(id);
    this.router.navigate(["/blogDetails", id]);
    }
}