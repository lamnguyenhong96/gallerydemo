Template.home.helpers({
    scripts: function () {
        Meteor.setTimeout(function () {
             new WOW().init();
            function classReg(className) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

            // classList support for class management
            // altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ('classList' in document.documentElement) {
                hasClass = function (elem, c) {
                    return elem.classList.contains(c);
                };
                addClass = function (elem, c) {
                    elem.classList.add(c);
                };
                removeClass = function (elem, c) {
                    elem.classList.remove(c);
                };
            } else {
                hasClass = function (elem, c) {
                    return classReg(c).test(elem.className);
                };
                addClass = function (elem, c) {
                    if (!hasClass(elem, c)) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function (elem, c) {
                    elem.className = elem.className.replace(classReg(c), ' ');
                };
            }

            function toggleClass(elem, c) {
                var fn = hasClass(elem, c) ? removeClass : addClass;
                fn(elem, c);
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

            // transport
            if (typeof define === 'function' && define.amd) {
                // AMD
                define(classie);
            } else {
                // browser global
                window.classie = classie;
            }

            var cbpAnimatedHeader = (function () {
                var b = document.documentElement,
                    g = document.querySelector(".navbar-default"),
                    e = false,
                    a = 300;

                function f() {
                    window.addEventListener("scroll", function (h) {
                        if (!e) {
                            e = true;
                            setTimeout(d, 250)
                        }
                    }, false)
                }

                function d() {
                    var h = c();
                    if (h >= a) {
                        classie.add(g, "navbar-shrink")
                    } else {
                        classie.remove(g, "navbar-shrink")
                    }
                    e = false
                }

                function c() {
                    return window.pageYOffset || b.scrollTop
                }
                f()
            })();
            $('body').scrollspy({
                target: '.navbar-fixed-top'
            });
        }, 200);
    },
    pagetitle: function(){
        var title = NavTabs.findOne({type: "page title"});
        if(typeof title !== "undefined")
            return title.title;
    },
    navIntro: function(){
        var navtitle = NavTabs.findOne({type: "intro"});
        if(typeof navtitle !== "undefined")
            return navtitle.navTitle;
    },
    milestone: function(){
        var milstone = NavTabs.findOne({type: "about"});
        if(typeof milstone !== "undefined")
            return milstone.navTitle;
    },
    introhead: function(){
        var introhead = NavTabs.findOne({type: "page title"});
        if(typeof introhead !== "undefined")
            return introhead.introhead;
    },
    introlarge: function(){
        var introlarge = NavTabs.findOne({type: "page title"});
        if(typeof introlarge !== "undefined")
            return introlarge.introlarge;
    },
    navIntros: function(){
        var navIntros = NavTabs.find({type: "intro"},{limit: 3});
        if(typeof navIntros !== "undefined")
            return navIntros;
    },
    class: function(){
        var count = 12;
        var navIntros = NavTabs.find({type: "intro"},{limit: 3});
        if(navIntros.count() === 2)
            count = 6;
        if(navIntros.count() > 3 || navIntros.count() === 3)
            count = 3;
        return count;
    },
    abouts: function(){
        return NavTabs.find({type: "about"});
    },
    albums: function(){
        return Albums.find();
    }
});

Template.layout.helpers({
    class: function(){
        var count = 12;
        var navIntros = Meteor.users.find({},{limit: 3});
        if(navIntros.count() === 2)
            count = 6;
        if(navIntros.count() > 3 || navIntros.count() === 3)
            count = 3;
        return count;
    },
    authors: function(){
        return Authors.find();
    }
});

Template.home.events({
    'click .navbar-collapse ul li a': function(){
        $('.navbar-toggle:visible').click();
    },
    'click a.page-scroll': function(e){
        var $anchor = $(e.target);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    }
});
Session.setDefault('currentId',null);
Template.modal.events({
    'click .btn': function(){
        Session.set('currentId',this._id);
        $(".modal-backdrop").remove();
    }
})