Meteor.publish("images",function(){
    return Collections.Images.find();
});
Meteor.publish("original", function(){
    return Collections.Original.find();
});
Meteor.publish("albums", function(){
    return Albums.find();
});
Meteor.publish("author", function(){
    return Authors.find();
});
Meteor.publish("navtabs",function(){
    return NavTabs.find();
});
Meteor.publish("allUsers",function(){
    return Meteor.users.find();
})