Meteor.methods({
    removeDoc: function(ids){
        return Collections.Images.remove({_id: {$nin: Ids}});
    }
})