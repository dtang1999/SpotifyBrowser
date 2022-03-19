import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server
    
    return this.http.get(this.expressBaseUrl+endpoint).toPromise().then((json) => {
      return json;
    });
  }

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string):Promise<ResourceData[]> {
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.

    let resources:ResourceData[];

    resource = encodeURIComponent(resource);
    return this.sendRequestToExpress('/search/'+category+'/'+resource).then((data) => {
      if (category == 'artist')
      {
        resources = data['artists']['items'].map((artist) => {
          return new ArtistData(artist);
        })
      }
      else if (category == 'album')
      {
        resources = data['albums']['items'].map((album) => {
          return new AlbumData(album);
        })
      }
      else if (category == 'track')
      {
        resources = data['tracks']['items'].map((track) => {
          return new TrackData(track);
        })
      }
      console.log(resources);
      return resources;
    });

  }

  getArtist(artistId:string):Promise<ArtistData> {
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
    return this.sendRequestToExpress("/artist/"+artistId).then((data) => {
      return new ArtistData(data);
    })
  }

  getRelatedArtists(artistId:string):Promise<ArtistData[]> {
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
    return this.sendRequestToExpress('/artist-related-artists/'+artistId).then((data) => {
      return data['artists'].map((artist) => {
        return new ArtistData(artist);
      })
    })
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    //TODO: use the top tracks endpoint to make a request to express.
    return this.sendRequestToExpress('/artist-top-tracks/'+artistId).then((data) => {
      return data['tracks'].map((track) => {
        return new TrackData(track);
      })
    })
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    //TODO: use the albums for an artist endpoint to make a request to express.
    return this.sendRequestToExpress('/artist-albums/'+artistId).then((data) => {
      return data['items'].map((album) => {
        return new AlbumData(album);
      })
    })
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    return this.sendRequestToExpress('/album/'+albumId).then((data) => {
      return new AlbumData(data);
    })
  }

  getTracksForAlbum(albumId:string):Promise<TrackData[]> {
    //TODO: use the tracks for album endpoint to make a request to express.
    return this.sendRequestToExpress('/album-tracks/'+albumId).then((data) => {
      return data['items'].map((track) => {
        return new TrackData(track);
      })
    })
  }

  getTrack(trackId:string):Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    return this.sendRequestToExpress('/track/'+trackId).then((data) => {
      return new TrackData(data);
    });
  }

  getAudioFeaturesForTrack(trackId:string):Promise<TrackFeature[]> {
    //TODO: use the audio features for track endpoint to make a request to express.
    let trackFeature:TrackFeature[] = [];
    return this.sendRequestToExpress('/track-audio-features/'+trackId).then((data) => {
      trackFeature.push(new TrackFeature('danceability',data['danceability']));
      trackFeature.push(new TrackFeature('energy',data['energy']));
      trackFeature.push(new TrackFeature('speechiness',data['speechiness']));
      trackFeature.push(new TrackFeature('acousticness',data['acousticness']));
      trackFeature.push(new TrackFeature('instrumentalness',data['instrumentalness']));
      trackFeature.push(new TrackFeature('liveness',data['liveness']));
      trackFeature.push(new TrackFeature('valence',data['valence']));

      return trackFeature;
    });
  }
}
