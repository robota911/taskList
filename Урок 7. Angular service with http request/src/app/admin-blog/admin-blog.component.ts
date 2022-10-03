
import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog.service.service';
import { IDblogResponse } from '../inter.face';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  public adminBlog: IDblogResponse[] = [];
  public id!: number;
  public author!: string;
  public title!: string;
  public text!: string;

  constructor(
    private blogService: BlogServiceService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    this.blogService.getAll().subscribe(data => {
      this.adminBlog = data;
    })
  }

  addBlog(): void {
    const newBlog = {
      author: this.author,
      title: this.title,
      text: this.text
    }
    this.blogService.create(newBlog).subscribe(() => {
      this.getBlog();
      this.author = '';
      this.title = '';
      this.text = '';
    });
  }

  editBlog(table: IDblogResponse): void {
    this.id = table.id;
    this.title = table.title;
    this.text = table.text;
    this.author = table.author;
  }

  saveBlog(): void {
    const updateBlog = {
      author: this.author,
      title: this.title,
      text: this.text
    };
    this.blogService.update(updateBlog, this.id).subscribe(() => {
      this.getBlog();
    })
    this.author = '';
    this.title = '';
    this.text = '';
  }

  deleteBlog(table: IDblogResponse): void {
    if (confirm('Are you sure?')) {
      this.blogService.delete(table.id).subscribe(() => {
        this.getBlog();
      });
    }
  }
}
