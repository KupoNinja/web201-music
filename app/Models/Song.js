export default class Song {
  constructor(data) {
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
      <div class="card" style="width: 18rem;">
        <img src="${this.albumArt}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${this.album}</h3>
          <h4>${this.artist}</h4>
          <h5 class="card-title">${this.title}</h5>
          <p>$${this.price}</p>
          <audio src="${this.preview}" controls></audio>
          <p>Add to PlayList <i class="btn btn-success fa fa-plus-square" onclick="app.songController.addSong()" aria-hidden="true"></i></p>
        </div>
      </div>
    `;
  }

  get playlistTemplate() {
    return /* html */ `
      <div>${this.title}</div>
        `;
  }
}
