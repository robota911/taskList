import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog.service.service';
import { IDblogResponse } from '../inter.face';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public userBlog: Array<IDblogResponse> = [];

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.getBlog()
  }

  getBlog(): void {
    this.blogService.getAll().subscribe(data => {
      this.userBlog = data;
    })
  }

}
