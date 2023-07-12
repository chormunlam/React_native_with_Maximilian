class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.location = location; //{lat: ,lng:}
    this.id = new Date().toDateString + Math.random().toString();
  }
}
