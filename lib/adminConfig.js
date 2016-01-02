/*
 * Admin Config
 */
AdminConfig = {
    name: "AdminDashBoard",
    collections: {
        // albums
        Albums: {
            color: 'red',
            icon: 'pencil',
            tableColumns: [
                {
                    label: 'Title',
                    name: 'title'
                },
                {
                    label: 'Created At',
                    name: 'createdAt'
                }
            ]
        },
        NavTabs: {
            color: 'green',
            showWidget: false,
            icon: 'book',
            showEditColumn: false, // Set to false to hide the edit button. True by default.
            tableColumns: [
                {
                    label: "Tiêu đề",
                    name : "title"
                },
                {
                    label: "Vị trí",
                    name:"index"
                },
                {
                    label:"Loại",
                    name:"type"
                }
            ]
        },
        Authors: {
            color: 'blue',
            icon: 'book',
            tableColumns: [
                {
                    label: "Tên",
                    name : "name"
                },
                {
                    label: "Email",
                    name:"email"
                },
                {
                    label:"Facebook",
                    name:"facebook"
                }
            ]
        },
    }
};

AdminDashboard.addCollectionItem(function (collection, path) {
    if (collection === 'NavTabs') {
        if(Roles.userIsInRole(Meteor.userId(), ['admin']))
            return {
                title: 'Introduce',
                url: path + '/nav/collection'
            };
    }
});
AdminDashboard.addCollectionItem(function (collection, path) {
    if (collection === 'NavTabs') {
        if(Roles.userIsInRole(Meteor.userId(), ['admin']))
            return {
                title: 'Title Page',
                url: path + '/title/collection'
            };
    }
});
AdminDashboard.addCollectionItem(function (collection, path) {
    if (collection === 'NavTabs') {
        if(Roles.userIsInRole(Meteor.userId(), ['admin']))
            return {
                title: 'About',
                url: path + '/about/collection'
            };
    }
});