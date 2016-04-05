Meteor.methods({
  scrape : function(urlString){
    //let url = "https://atmospherejs.com/?q=scrape";
    if(Meteor.isServer){
      console.log(urlString);
      websiteData = Scrape.website(urlString);
      return websiteData;

    }
  }
});