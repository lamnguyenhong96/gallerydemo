NavTabs = new Meteor.Collection("navtabs");
Schema = {};

Schema.TitlePage = new SimpleSchema({
    title: {
        type: String,
        label: "Tên Trang"
    },
    introhead: {
        type: String,
        label: "intro1"
    },
    introlarge: {
        type: String,
        label: "intro2"
    },
    type: {
        type: String,
        defaultValue: "page title",
        autoform: {
            afFieldInput: {
                type: "hidden",
            },
            afFormGroup: {
                label: false
            }
        }
    },
    picture: {
        type: String,
        label: "Ảnh Ngoài Trang",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'original'
            }
        }
    },
    signinImage: {
        type: String,
        label: "Ảnh Ngoài Trang Đăng Nhập",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'original'
            }
        }
    }
});

Schema.Introduce = new SimpleSchema({

    navTitle: {
        type: String,
        label: "Tên Tab"
    },
    title: {
        type: String,
        label: "Tiêu Đề"
    },
    index: {
        type: Number,
        label: "Vị Trí",
    },
    type: {
        type: String,
        defaultValue: "intro",
        autoform: {
            afFieldInput: {
                type: "hidden",
            },
            afFormGroup: {
                label: false
            }
        }
    },
    icon: {
        type: String,
        label: "Icon"
    },
    content: {
        type: String,
        label: "Tóm Tắt (*)",
        autoform: {
            rows: 5
        }
    }
});

Schema.About = new SimpleSchema({
    navTitle: {
        type: String,
        label: "Tên Tab"
    },
    title: {
        type: String,
        label: "Tiêu Đề"
    },
    description: {
        type: String,
        label: "Mô tả"
    },
    index: {
        type: Number,
        label: "Vị Trí",
    },
    type: {
        type: String,
        defaultValue: "about",
        autoform: {
            afFieldInput: {
                type: "hidden",
            },
            afFormGroup: {
                label: false
            }
        }
    },
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
    invert: {
        type: Boolean,
        optional: true,
        autoform: {
            type: "boolean-checkbox",
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    content: {
        type: String,
        label: "Tóm Tắt (*)",
        autoform: {
            rows: 5
        }
    },
    date:{
        type: String,
        label: "MileStone"
    }
});