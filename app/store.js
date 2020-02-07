import Song from "./Models/Song.js";

const TESTSONG = new Song({
  _id: "test",
  title: "test",
  albumArt: "test",
  artist: "test",
  album: "test",
  price: 0.99,
  preview: "test"
})

class Store {
  /**
   * Provides access to application state data
   */
  state = {
    /** @type {Song[]} */  
    songs: [],
    /** @type {Song[]} */
    playlist: [TESTSONG]
  };
}

const store = new Store();
export default store;
