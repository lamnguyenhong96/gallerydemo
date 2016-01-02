Template.albumsDetail.helpers({
    imageList: function () {
        var album = Albums.findOne(Session.get("currentId")).imageList;
        var pictures = [];
        _.each(album, function (obj) {
            var picture = Collections.Original.findOne(obj.image);
            var caption = obj.caption;
            pictures.push({
                picture: picture.url(),
                caption: caption
            });
        });
        return pictures;
    },
    script: function () {
        Meteor.setTimeout(function () {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
            })
        }, 200);
    }
})