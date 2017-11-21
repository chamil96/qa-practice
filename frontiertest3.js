var webdriverio = require('webdriverio');
var assert = require('assert');
var options = {
    desiredCapabilities: {
        browserName: 'googlechrome',
       
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .getTitle()
    .then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });

// Making sure images and graphics are all visible    

webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .isVisible('.hero')
    .then(function(img) {
      console.log('hero was display: ' + img);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
 
webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .isVisible('.graphic')
    .then(function(img){
      console.log('graphic display was: ' + img);
    })
    .end()
    .catch(function(err) {
       console.log(err);
    }); 
    
webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .isVisible('.section--bg')
    .then(function(img){
      console.log('section--bg display was: ' + img);
    })
    .end()
    .catch(function(err) {
       console.log(err);
    });    


    // Making sure prices, phone numbers, and timer are formatted correctly (using regex)

    // Making sure form is validated			
        // a.	submit form without entering any information		
        // b.	submit form by entering incorrect information		
        // c.	submit form by entering valid information

webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .setValue('#zip', '')
    .submitForm('#form-address-check')
    .then(function(zip){
    if(zip == ''){
        var error = browser.isVisible('.form__error');
    }
    console.log('error message displayed: ' + error);
    })
    .end()
    .catch(function(err) {
       console.log(err);
    });          

    // Making sure links direct correctly

    // Making sure text is correct / spelling is correct

    // Making sure JavaScript interactions are working i.e. hovering, clicking, animations

    // Making sure CSS is consistent across similar elements i.e. link styling, button styling