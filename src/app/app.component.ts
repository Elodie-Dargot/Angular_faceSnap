import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Angel',
      'La moitié de Stitch',
      'https://static.wikia.nocookie.net/disney/images/d/d0/Profile_-_Angel.png/revision/latest/scale-to-width-down/1031?cb=20201024001759',
      new Date,
      13
    )
  }
}
