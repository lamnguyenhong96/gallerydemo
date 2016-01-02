Albums = new Meteor.Collection("albums");

Albums.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Tiêu đề (*)"
    },
    summary: {
        type: String,
        label: "Tóm Tắt (*)",
        autoform: {
            rows: 5
        }
    },
    description: {
         type: String,
        label: "Mô Tả(*)"
    },
    /**
     * Single upload Image
     */
    picture: {
        type: String,
        label: "Ảnh đại diện",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'images'
            }
        }
    },
    /**
     * Multiple upload Images
     */
    imageList: {
        type: Array,
        label: 'Up Nhiều Ảnh',
        optional: true
    },
    "imageList.$": {
        type: Object
    },
    "imageList.$.image": {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'original'
            }
        }
    },
    "imageList.$.caption": {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
     owner: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.userId();
            }
        },
        autoform: {
            afFieldInput: {
                firstOption: false,
                disabled: true
            },
            options: function() {
                return _.map(Meteor.users.find().fetch(), function(user) {
                    return {
                        label: user.emails[0].address,
                        value: user._id
                    };
                });
            }
        }
    }
}));