import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // static name:string = null;
  // static profile_pic:string = "../../../assets/unknown.jpg";
  // static profile_link:string = null;

  static myName:string = null;
  static profile_pic:string = "../../../assets/unknown.jpg";
  static profile_link:string = null;

  gesture: String = "";
  loadFlag: boolean = false;

  //TODO: inject the Spotify service
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  aboutMe()
  {
    this.spotifyService.aboutMe().then((data) => {
      // this.name = data.name;
      // this.profile_link = data.spotifyProfile;
      // this.profile_pic = data.imageURL;

      AboutComponent.myName = data.name;
      AboutComponent.profile_link = data.spotifyProfile;
      AboutComponent.profile_pic = data.imageURL;
      // console.log("through here")
      // console.log(data.name)
      // console.log(data.spotifyProfile)
      // console.log(data.imageURL)

    });
  }

  get staticName() {
    return AboutComponent.myName;
  }

  get staticPic() {
    return AboutComponent.profile_pic;
  }

  get staticLink() {
    return AboutComponent.profile_link;
  }

  closeMe()
  {
    // this.name = null;
    // this.profile_link = null;
    // this.profile_pic = "../../../assets/unknown.jpg";
    AboutComponent.myName = null;
    AboutComponent.profile_link = null;
    AboutComponent.profile_pic = "../../../assets/unknown.jpg";
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log(this.gesture)
    // if (this.gesture == "Open Hand")
    // {
    //   this.aboutMe();
    // }
    // else if (this.gesture == "Closed Hand")
    // {
    //   this.closeMe();
    // }
    // else if (this.gesture == "Hand Pointing")
    // {
    //   if (this.profile_link != null)
    //   {
    //     this.goToLink(this.profile_link);
    //   }
    // }
  }


}
