import store from "../store.js";
import SongService from "../Services/SongsService.js";
import Song from "../Models/Song.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  store.state.songs.forEach(s => {
    template += s.resultsTemplate
  }); 
  document.getElementById("songs").innerHTML = template;
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = "";
  store.state.playlist.forEach(s => {
    template += s.playlistTemplate
  });
  document.getElementById("playlist").innerHTML = template;
}

//Public
export default class SongsController {
  constructor() {
    // TODO load your playlist
    this.getPlaylist();
  }

  /**Takes in the form submission event and sends the query to the service */
  async search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      await SongService.getMusicByQuery(e.target.query.value);
      _drawResults();
    } catch (error) {
      console.error(error);
    }
  }

  async getPlaylist() {
    try {
      await SongService.getMySongs();
      console.log(store.state.playlist);
      _drawPlaylist();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  async addSong(id) {
    try {
      await SongService.addSong(id);
      _drawPlaylist();
    } catch (error) {
      console.error(error);
    }
  }

  // NOTE Only thing I have to do left. Need to figure out a dynamic button...
  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  async removeSong(id) {
    try {
      await SongService.removeSong(id);
      _drawPlaylist();
    } catch (error) {
      console.error(error);
    }
  }
}
