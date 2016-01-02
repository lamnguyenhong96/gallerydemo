var subs = new SubsManager({
    // maximum number of cache subscriptions
    cacheLimit: 10,
    // any subscription will be expire after 5 minute, if it's not subscribed again
    expireIn: 5
});

Router.map(function () {
    this.route("home", {
        path: "/",
        template: "home",
        layoutTemplate: 'layout',
        waitOn: function () {
            subs.subscribe("images");
            subs.subscribe("original");
            subs.subscribe("albums");
            subs.subscribe("author");
            subs.subscribe("navtabs");
             subs.subscribe("allUsers");
        }
    });
    this.route("signup", {
        path: "/signup",
        template: "signup"
    });
    this.route('detail', {
        path: "/detail",
        template: "albumsDetail",
        layoutTemplate: "layout",
        waitOn: function () {
            subs.subscribe("images");
            subs.subscribe("original");
            subs.subscribe("albums");
            subs.subscribe("author");
            subs.subscribe("navtabs");
            subs.subscribe("allUsers");
        }
    })
})