// const MAIN_URL = "https://jsonplaceholder.typicode.com";

// export const handleFetch = async (url) => {
//   return await fetch(url).then((r) => {
//     if (!r.ok) throw new Error(`Fetch error: ${r.status}`);
//     return r.json();
//   });
// };

// const getUsers = () => handleFetch(`${MAIN_URL}/users`);
// const getUser = (id) => handleFetch(`${MAIN_URL}/users/${id}`);
// const getAlbums = () => handleFetch(`${MAIN_URL}/albums`);
// const getAlbum = (id) => handleFetch(`${MAIN_URL}/albums/${id}`);
// const getAlbumByUserId = (id) => handleFetch(`${MAIN_URL}/albums?userId=${id}`);
// const getPhotosByAlbumId = (id) =>
//   handleFetch(`${MAIN_URL}/photos?albumId=${id}`);

export class FetchService {
  constructor(url) {
    this.url = url;
  }
  handleFetch = async (URL) => {
    return await fetch(URL).then((r) => {
      if (!r.ok) throw new Error(`Fetch error: ${r.status}`);
      return r.json();
    });
  };
  getUsers = async () => await this.handleFetch(`${this.url}/users`);
  getUser = (id) => this.handleFetch(`${this.url}/users/${id}`);
  getAlbums = () => this.handleFetch(`${this.url}/albums`);
  getAlbum = (id) => this.handleFetch(`${this.url}/albums/${id}`);
  getAlbumsByUserId = (id) =>
    this.handleFetch(`${this.url}/albums?userId=${id}`);
  getPhotosByAlbumId = (id) =>
    this.handleFetch(`${this.url}/photos?albumId=${id}`);
}
