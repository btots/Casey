import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'
import { Blog } from '../models/blog'

@Injectable()
export class BlogmanagerService {
  blogCollection: AngularFirestoreCollection<Blog>;
  blogs: Observable<Blog[]>
  blogDoc: AngularFirestoreDocument<Blog>;

  constructor(public afs:AngularFirestore) { 
    // this.blogs = this.afs.collection('blog-entries').valueChanges();

    this.blogCollection = this.afs.collection('blog-entries', ref => ref.orderBy('title', 'asc'));

    this.blogs = this.blogCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Blog;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getBlogs(){
    return this.blogs;
  }

  addBlog(blog: Blog){
    this.blogCollection.add(blog);
  }

  deleteBlog(blog: Blog){
    this.blogDoc = this.afs.doc(`blog-entries/${blog.id}`);
    this.blogDoc.delete();
  }

  updateBlog(blog: Blog){
    this.blogDoc = this.afs.doc(`blog-entries/${blog.id}`);
    this.blogDoc.update(blog);
  }
}
