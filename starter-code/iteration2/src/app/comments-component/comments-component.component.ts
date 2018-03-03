import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title: string = 'Comments';
  comments: Array<any> = [
      {
          name: 'Bobby Tables',
          avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
          message: 'Itsnklasfho ashlja sjdaklasljdadsdasdasd'
      },
      {
          name: 'Ironhack School',
          avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
          message: 'dasfasf ashlja qqqqqqqqqqqqqqqqqq'
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
