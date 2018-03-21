import { Component, OnInit } from '@angular/core';
import { BlogmanagerService } from '../../services/blogmanager.service'
import { Blog } from '../../models/blog'; 
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-blogman',
  templateUrl: './blogman.component.html',
  styleUrls: ['./blogman.component.css']
})
export class BlogmanComponent implements OnInit {
  blogs: Blog[];
  blog: Blog = {
    title: '',
    subtitle: '',
    entry: '',
  }
  editState: boolean = false;
  blogToEdit: Blog;

  constructor (private blogManagerService: BlogmanagerService, public authService: AuthService) { }

  // ngOnInit() {
  //   this.blogManagerService.getBlogs().subscribe(blogs => {
  //     this.blogs = blogs;
  //     console.log("BlogMan init")
  //   });
  // }

  ngOnInit() {
    this.blogManagerService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      console.log("BlogMan init")
    });
  }

  onSubmit() {
    if(this.blog.title != ''){
      this.blogManagerService.addBlog(this.blog);
      // This could be a lot cleaner
      this.blog.title = '';
      this.blog.entry = '';
      this.blog.subtitle = '';
      this.blog.id = '';
    }
  }

  deleteBlog(event, blog: Blog) {
    // Make an alert check to go here
    this.clearState();
    this.blogManagerService.deleteBlog(blog);
  }

  editBlog(event, blog: Blog) {
    this.editState = true;
    this.blogToEdit = blog;
  }

  updateBlog(blog: Blog) {
    this.blogManagerService.updateBlog(blog);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.blogToEdit = null;
  }

  
}
