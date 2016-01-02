Authors = new Meteor.Collection("authors");

Authors.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'name', // We use this function to make i18n work in autoform
        optional: true
    },
    avatar: {
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
    bio: {
        type: String,
        label: 'Bio', // We use this function to make i18n work in autoform
        optional: true
    },
    address: {
        type: String,
        label: 'address', // We use this function to make i18n work in autoform
        optional: true
    },
    phone: {
        type: String,
        label: 'Phone', // We use this function to make i18n work in autoform
        optional: true
    },
    email: {
        type: String,
        label: 'Email', // We use this function to make i18n work in autoform
        optional: true
    },
    facebook: {
        type: String,
        label: 'Facebook', // We use this function to make i18n work in autoform
        optional: true,
        regEx: SimpleSchema.RegEx.Url
    },
    city: {
        type: String,
        label: 'City', // We use this function to make i18n work in autoform
        optional: true
    },
}));