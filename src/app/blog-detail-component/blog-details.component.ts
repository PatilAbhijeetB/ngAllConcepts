import {Component} from "@angular/core";
import{ ActivatedRoute,Params,Router} from "@angular/router";

@Component({
    selector:"my-blog-details",
    templateUrl:"./blog-detail.component.html"
})

export class BlogDetailComponent{
    data=[
        {id:1 , imgUrl:"Url1" , title:"SEO Angular2" , descripetion:"Angular 2 SEO"},
        {id:2 , imgUrl:"Url2" , title:"Angular Routing" , descripetion:"Angular Routing"},
        {id:3 , imgUrl:"Url3" , title:"NodeApp" , descripetion:"Node Apllication"}
    ]

    selectedBlogId=1;
    constructor(private activatedRoute:ActivatedRoute,private router:Router)
    {
        activatedRoute.params.subscribe((params:Params)=>{
            this.selectedBlogId=Number(params["id"])
        });
    }
    onPrevious()
    {
        this.router.navigate(["blogDetails",this.selectedBlogId-1]);
    }
    onNext()
    {
        this.router.navigate(["blogDetails",this.selectedBlogId+1]);
    }
}