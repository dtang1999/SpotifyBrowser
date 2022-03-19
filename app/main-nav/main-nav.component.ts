import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PredictionEvent } from 'src/app/prediction-event';
import { MatSidenav } from '@angular/material/sidenav';
import { AboutComponent } from '../components/about/about.component';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SearchComponent } from '../components/search/search.component';

@Component({
  providers:[AboutComponent, SearchComponent ],
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements AfterViewInit{
  gesture: String = "";
  loadFlag: boolean = false;
  // navDisplay: boolean;

  @ViewChild('drawer') drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private about:AboutComponent,
    private search: SearchComponent, private spotifyService:SpotifyService) {}


  ngAfterViewInit() {
    // this.about = this.child_about.aboutMe();
    // console.log(this.about.profile_link)
  }
  
  callAboutMe() {
    this.drawer.close();
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log(this.gesture)
    if (this.gesture == "Two Open Hands")
    {
      this.about.aboutMe();
    }
    else if (this.gesture == "Closed Hand")
    {
      this.about.closeMe();
    }
    else if (this.gesture == "Two Hands Pointing")
    {
      if (AboutComponent.profile_link != null)
      {
        this.about.goToLink(AboutComponent.profile_link);
      }
    }
    else if (this.gesture == "Hand Pointing")
    {
      this.search.search();
      console.log("through here")
    }
    else  if (this.gesture == "Right Swipe")
    {
      this.drawer.open();
    }
    else if (this.gesture == "Left Swipe")
    {
      // console.log(this.gesture)
      this.drawer.close();
    }
  }
}
