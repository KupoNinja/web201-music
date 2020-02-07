import store from "../store.js";
import SongService from "../Services/SongsService.js";

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
function _drawPlaylist() {}

//Public
export default class SongsController {
  constructor() {
    // TODO load your playlist
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

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  async addSong(id) {}

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  async removeSong(id) {}
}
