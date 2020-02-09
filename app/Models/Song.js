export default class Song {
  constructor(data) {
    if (!data) {
      return;
    }

    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get resultsTemplate() {
    return /* html */ `
      <div class="card">
        <img src="${this.albumArt}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${this.album}</h3>
          <h4>${this.artist}</h4>
          <h5 class="card-title">${this.title}</h5>
          <p>$${this.price}</p>
          <audio src="${this.preview}" controls></audio>
          <button type="button" class="btn btn-success" onclick="app.songsController.addSong('${this._id}')"><i class="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
      </div>
    `;
  }

  // NOTE Trash icon not showing
  get playlistTemplate() {
    return /* html */ `
      <div class="card">
        <div class="card-body">
          <div>${this.title}</div>
          <audio src="${this.preview}" controls></audio>
          <button type="button" class="btn btn-danger" onclick="app.songsController.removeSong('${this._id}')"><i class="far fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  }

  get activeSongTemplate() {
    return /* html */ `
      <div>
        <audio src="${this.preview}" controls></audio>
      </div>
    `
  }
}
