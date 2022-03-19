import { Component, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { PredictionEvent } from 'src/app/prediction-event';
import { AboutComponent } from 'src/app/components/about/about.component';

@Component({
  providers:[AboutComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gesture:string
  
  constructor(private about: AboutComponent) {
  }

  // @ViewChild(AboutComponent) about:AboutComponent
  // @ViewChildren(AboutComponent) about: QueryList<AboutComponent>;
  // @ViewChild('router-child') child: ElementRef


  ngAfterViewInit() {
    // console.log(this.about.profile_link)
    // this.about.changes.subscribe((comps: QueryList<AboutComponent>) =>
    // {
    //   // Now you can access to the child component
    //   console.log(comps.first.profile_link)
    // });
  }
  callAboutMe() {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    console.log(this.gesture)

    if (this.gesture == "Open Hand")
    {
      // console.log(this.gesture)
      this.about.aboutMe();
      // console.log(this.about.profile_link);

    }
    // else if (this.gesture == "Closed Hand")
    // {
    //   this.about.closeMe();
    // }
    // else if (this.gesture == "Hand Pointing")
    // {
    //   if (this.about.profile_link != null)
    //   {
    //     this.about.goToLink(this.about.profile_link);
    //   }
    // }
  }
}
