var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });


//========================================
//========================================
//========================================

var userName = 'joanna__doe'         //put your username here
var pass = 'autopass'             //put your password here
var tag = 'cat'              //put your tag here


//========================================
//========================================
//========================================


logIn();

function logIn(){
  nightmare
    .goto('https://www.instagram.com/accounts/login/')
    .wait('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(1) > input')
    .type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(1) > input', userName)
    .type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(2) > input', pass)
    .click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > span > button')
    .wait(5000)
    .then(function(){
      getURL()
    })

}


function getURL(){
  nightmare
    .goto('https://www.instagram.com/explore/tags/'+tag+'/?hl=en')
    .click('#react-root > section > main > article > div:nth-child(4) > div._nljxa > div:nth-child(1) > a:nth-child(1) > div > div._ovg3g')
    .wait(5000)
    .then(function(){
      clickLike()
    })
}



function clickLike(){
  nightmare
    .click('body > div:nth-child(9) > div > div._g1ax7 > div > article > div._es1du._rgrbt > section._jveic._rhgel > a')
    .wait((Math.random() * 10000) + 10000)    .then(function(){
      getURL()
    })
}


