import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  static searchString:string;
  static searchCategory:string = 'artist';
  static searchCategories:string[] = ['artist', 'album', 'track'];
  static resources:ResourceData[];

  public searchReference = SearchComponent
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  clearSearch() {
    if (SearchComponent.searchString.length != 0) {
      SearchComponent.searchString = "";
    }
  }

  search() {
    // console.log(this.resources);
    // this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data) => {
    //   this.resources = data;
    //   console.log(this.resources);
    // })

    console.log(SearchComponent.resources);
    this.spotifyService.searchFor(SearchComponent.searchCategory, SearchComponent.searchString).then((data) => {
      SearchComponent.resources = data;
      console.log(SearchComponent.resources);
    })
    
  }
  
  
  // search(sc, ss) {
  //   //TODO: call search function in spotifyService and parse response
  //   // console.log(this.searchString);

  //   // console.log(this.searchCategory);

  //   this.spotifyService.searchFor(sc, ss).then((data) => {
  //     this.resources = data;
  //     // console.log(data)
  //   })
    
  // }

}
