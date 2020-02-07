import Song from "./Models/Song.js";

class Store {
  /**
   * Provides access to application state data
   */
  state = {
    /** @type {Song[]} */  
    songs: []
  };
}

const store = new Store();
export default store;
