import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  imageUrl!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  isSnapped!: boolean;
  buttonText!: string;

  ngOnInit(): void {
    this.title = 'Stitch';
    this.imageUrl = 'https://les-reines-du-tissu.fr/wp-content/uploads/2023/03/STITCH-3.jpeg'
    this.description = 'Il a tout cassé !';
    this.createdDate = new Date();
    this.buttonText = "Oh snap!";
    this.snaps = 6;
    this.isSnapped = false;
  }

  onAddSnap(): void {
    if (!this.isSnapped) {
      this.buttonText = "Oops, unsnap!"
      this.isSnapped = true;
      this.snaps++;
    } else {
      this.buttonText = "Oh snap!";
      this.isSnapped = false;
      this.snaps--;
    }
  }
}
