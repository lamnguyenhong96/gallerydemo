//Add roles for Images And Videos
function trueFunc(userId) {
    return true;
}
function falseFunc() {return false;}

Collections.Images.allow({
    insert: trueFunc,
    update: trueFunc,
    remove: trueFunc,
    download: trueFunc
});
Collections.Images.deny({
    insert: falseFunc,
    update: falseFunc,
    remove: falseFunc,
    download: falseFunc
});

Collections.Original.allow({
    insert: trueFunc,
    update: trueFunc,
    remove: trueFunc,
    download: trueFunc
});
Collections.Original.deny({
    insert: falseFunc,
    update: falseFunc,
    remove: falseFunc,
    download: falseFunc
});
Albums.allow({
    insert: trueFunc,
    update: trueFunc,
    remove: trueFunc,
});
Albums.deny({
    insert: falseFunc,
    update: falseFunc,
    remove: falseFunc,
});

Authors.allow({
    insert: trueFunc,
    update: trueFunc,
    remove: trueFunc,
});
Authors.deny({
    insert: falseFunc,
    update: falseFunc,
    remove: falseFunc,
});

NavTabs.allow({
    insert: trueFunc,
    update: trueFunc,
    remove: trueFunc,
});
NavTabs.deny({
    insert: falseFunc,
    update: falseFunc,
    remove: falseFunc,
});

