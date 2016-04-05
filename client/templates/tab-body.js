Template.tabBody.created = function(){
  this.linkList = new ReactiveVar();
  this.linkList.set(Links.find({},{sort: {timeAdded: -1}}));
};

Template.tabBody.rendered = function(){

};

Template.tabBody.helpers({
  displayLinks: function(){

    return Template.instance().linkList.get();
  }
});

Template.tabBody.events({
  'click .linkSort': function(evt, templt){
    console.log(evt.currentTarget, evt.target)
    $('.linkSort').removeClass('selected');
    $(evt.target).addClass('selected');
    switch(evt.target.id){
      case 'recent':
        templt.linkList.set(Links.find({},{sort: {timeAdded: -1}}))
        break;
      case 'rating':
        templt.linkList.set(Links.find({},{sort: {avRating: -1}}))
      }

  }
});