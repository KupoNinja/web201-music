import Song from "./Models/Song.js";

class Store {
  /**
   * Provides access to application state data
   */
  state = {
    /** @type {Song[]} */  
    songs: [],
    /** @type {Song[]} */
    playlist: []
  };
}

const store = new Store();
export default store;
