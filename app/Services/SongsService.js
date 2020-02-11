import Song from "../Models/Song.js";
import store from "../store.js";

// @ts-ignore
//TODO Change YOURNAME to your actual name
let _sandBoxUrl = "//bcw-sandbox.herokuapp.com/api/jj/songs/";

class SongsService {
  constructor() {
    // NOTE this will get your songs on page load
    this.getMySongs();
  }

  /**
   * Takes in a search query and retrieves the results that will be put in the store
   * @param {string} query
   */
    async getMusicByQuery(query) {
    let url = "https://itunes.apple.com/search?&term=" + query;
    let response = await fetch(url);
    let data = await response.json();
    store.state.songs = data.results.filter(d => d.kind == "song")
                                    .map(s => new Song(s));
  }

  /**
   * Retrieves the saved list of songs from the sandbox
   */
  async getMySongs() {
    let response = await fetch(_sandBoxUrl);
    let data = await response.json();
    store.state.playlist = data.data.map(s => new Song(s));
  }

  /**
   * Takes in a song id and sends it from the search results to the sandbox to be saved.
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */
  async addSong(id) {
    //TODO you only have an id, you will need to find it in the store before you can post it
    //TODO After posting it what should you do?
    let selectedSong = store.state.songs.find(s => s._id == id);
    let response = await fetch(_sandBoxUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(selectedSong)
    });
    let data = await response.json();
    let savedSong = new Song(data.data);
    store.state.playlist.push(savedSong);
  }

  /**
   * Sends a delete request to the sandbox to remove a song from the playlist
   * Afterwords it will update the store to reflect saved info
   * @param {string} id
   */
  async removeSong(id) {
    //TODO Send the id to be deleted from the server then update the store
    let songToDelete = store.state.playlist.find(s => s._id == id);
    let response = await fetch(_sandBoxUrl + songToDelete._id, {
      method: "DELETE"
    });
    let i = store.state.playlist.findIndex(s => s._id == songToDelete._id);
    if (i != -1) {
      store.state.playlist.splice(i, 1);
    }
  }
}

const service = new SongsService();
export default service;
