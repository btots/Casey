import { Component, OnInit } from '@angular/core';
import { BlogmanagerService } from '../../services/blogmanager.service'
import { Blog } from '../../models/blog'; 

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})

export class BlogpageComponent implements OnInit {
  blogs: Blog[];

  constructor (private blogManagerService: BlogmanagerService) { }

  ngOnInit() {
    this.blogManagerService.getBlogs().subscribe(blogs => {
      console.log(blogs)
      this.blogs = blogs;
    });
  }
}
