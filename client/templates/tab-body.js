Template.tabBody.created = function(){

};

Template.tabBody.rendered = function(){

};

Template.tabBody.helpers({
  displayLinks: function(){
    return Links.find({},{sort: {timeAdded: -1}});
  }
});

Template.tabBody.events({

});