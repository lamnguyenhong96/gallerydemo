Stores = {};
Collections = {};

/*Store Image*/

Stores.images = new FS.Store.GridFS("images");
Stores.thumbs = new FS.Store.GridFS("thumbs", {
  beforeWrite: function(fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
      extension: 'png',
      type: 'image/png'
    };
  },
  transformWrite: function(fileObj, readStream, writeStream) {
    // Transform the image into a 60px x 60px PNG thumbnail
    gm(readStream).resize(200).stream('PNG').pipe(writeStream);
    // The new file size will be automatically detected and set for this store
  }
});

/*Store origin*/

Stores.origin = new FS.Store.GridFS("origin", {
  beforeWrite: function(fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
      extension: 'png',
      type: 'image/png'
    };
  },
  transformWrite: function(fileObj, readStream, writeStream) {
    // Transform the image into a 60px x 60px PNG thumbnail
    gm(readStream).quality(70).stream('PNG').pipe(writeStream);
    // The new file size will be automatically detected and set for this store
  }
});

/*Images*/

Collections.Images = new FS.Collection("images", {
  stores: [
    Stores.images,
    Stores.thumbs
  ],
  filter: {
    maxSize: 20 * 1024 * 1024, //in bytes
    allow: {
      contentTypes: ['image/*']
    },
    onInvalid: function(message) {
      Meteor.isClient && alert(message);
    }
  }
});

/* Original */

Collections.Original = new FS.Collection("original", {
  stores: [
    Stores.origin
  ],
  filter: {
    maxSize: 20 * 1024 * 1024, //in bytes
    allow: {
      contentTypes: ['image/*']
    },
    onInvalid: function(message) {
      Meteor.isClient && alert(message);
    }
  }
});