import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap-component.html',
  styleUrls: ['./single-face-snap-component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>
  isSnapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.buttonText = "Oh snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddSnap(faceSnapId: number) {
    if (!this.isSnapped) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.buttonText = "Oops, unsnap!";
          this.isSnapped = true;
        })
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.buttonText = "Oh snap!";
          this.isSnapped = false;
        })
      );
    }
  }
}
