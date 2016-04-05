Template.addForm.created = function(){

};





Template.addForm.events({
  'click #submit-btn' : function(evt, tmplt){
    event.preventDefault();
    let link = $('#link-input').val();
    let comments = $('#comments').val();
    console.log(link)
// create some logic to add topics
    let newLink = {
      link: link
    }
  }
});