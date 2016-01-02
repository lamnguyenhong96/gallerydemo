Template.registerHelper("getPicture",function(){
    var picture = this.picture;
    if(typeof picture !== "undefined"){
        var image = Collections.Images.findOne(picture);
        return image.url();
    }
});

Template.registerHelper("getNewPic",function(){
    var picture = this.imageList[0].image;
    if(typeof picture !== "undefined"){
        var image = Collections.Original.findOne(picture);
        return image.url();
    }
});

Template.registerHelper("getAvatar",function(){
    var ava = this.avatar;
    if(typeof ava !== "undefined"){
        var image = Collections.Images.findOne(ava);
        return image.url();
    }
});

Template.registerHelper("getPageImage", function(){
    var image = NavTabs.findOne({type: "page title"});
    if(typeof image !== "undefined"){
        var picture = Collections.Original.findOne(image.picture);
        return picture.url();
    }
});

Template.registerHelper("getSigninImage", function(){
    var image = NavTabs.findOne({type: "page title"});
    if(typeof image !== "undefined"){
        var picture = Collections.Original.findOne(image.signinImage);
        return picture.url();
    }
});