//// your package.json
// {
//   "name": "NetNeutrality",
//   "version": "1.0.0",
//   "description": "Automatic twitter nightmare..",
//   "main": "script.js",
//   "dependencies": {
//     "nightmare": "^2.10.0",
//     "nightmare-iframe": "^1.0.2",
//     "nightmare-iframe-manager": "github:rosshinkley/nightmare-iframe-manager"
//   }
// }

const Nightmare = require("nightmare");
const settings  = require('./settings.js');

let nightmare = Nightmare({
  show: true,
  typeInterval: 100,
  pollInterval: 50
});


let delay = 1000;
let position = 3;

let targets = [
  {
    CEO: "reedhastings",
    COMPANY: 'Netflix',
  },
  {
    CEO: "alexisohanian",
    COMPANY: 'reddit',
  },
  {
    CEO: 'SusanWojcicki',
    COMPANY: 'youtube',
  },
  {
    CEO: 'sundarpichai',
    COMPANY: 'google',
  }
]

let message =`@${targets[position].CEO} if you honestly support #NetNeutrality its time you consider shutting down @${targets[position].COMPANY} for a few hours in protest. As CEO you have to weight the cost of shutting it down for a few hours vs paying ISP's for years. #ShutDownTheNet`;


function Tweet(TW_USER,TW_PASS,message){
  nightmare
  //login
  .goto('https://twitter.com/login/')
    .insert('.js-username-field.email-input.js-initial-focus[name="session[username_or_email]"]', TW_USER).wait(delay)
    .insert(".js-password-field[name='session[password]']", TW_PASS).wait(delay)
    .click('#page-container > div > div.signin-wrapper > form > div.clearfix > button')
  // open the tweet panel
    .wait("#global-new-tweet-button").click("#global-new-tweet-button") 
    // tweets "hello"
    .wait("#tweet-box-global").type('#tweet-box-global', message)
    .click("#global-tweet-dialog-dialog > div.modal-content > div.modal-tweet-form-container > form > div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton.tweet-button > button > span.button-text.tweeting-text")

  .wait(delay).end()
  // Execute commands
  .then(function () {console.log("Done!")})
  .catch(function (err) {console.log(err)})
};

//// 
Tweet(settings[1].name,settings[1].pass,message);
// var settings = [
//   {
//         name: "<YOUR_USERNAME>",
//         pass: "<YOUR_PASSWORD>"
//   },
//   {
//         name: "<YOUR_USERNAME>",
//         pass: "<YOUR_PASSWORD>"
//   }
// ]
