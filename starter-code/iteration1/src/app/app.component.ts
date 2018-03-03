import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to my Album!';
  album: Array<any> = [
      {
          imageURL: 'https://pbs.twimg.com/media/DTBgs5aXkAA4NXI.jpg',
          description: 'Ironhack Madrid',
          city: 'Madrid'
      },
      {
          imageURL: 'https://pbs.twimg.com/media/CiHN8hVWUAAKxaK.jpg',
          description: 'Ironhack Barcelona',
          city: 'Barcelona'
      },
      {
          imageURL: 'https://pbs.twimg.com/media/DOq1DqiXkAE5rfV.jpg',
          description: 'Ironhack Cuba',
          city: 'Cuba'
      }
  ]
}
