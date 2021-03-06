'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
var algoliasearch = require('algoliasearch');

const algolia_app_ID = functions.config().algolia.app_id;
const algolia_api_key = functions.config().algolia.api_key;
var client = algoliasearch(algolia_app_ID, algolia_api_key);
var index = client.initIndex('events');

const initEventsIndex = functions.database.ref('/events').onWrite(event => {
    // Only new objects
    // if (event.data.previous.exists()) {
    //     return;
    // }
    // var objectsToIndex = [];
    // var values = event.data.val();
    // for (var key in values){
    //     if (values.hasOwnProperty(key)){
    //         //Get current firease object
    //         var firebaeObject = values[key];
    //         //Specify algolia`s objectID using the firebase object key
    //         firebaeObject.objectID = key;
    //         if (firebaseObject.addressCoords){
    //             firebaseObject._geoloc = {
    //                 lat : firebaseObject.addressCoords.lat,
    //                 lng : firebaseObject.addressCoords.lon
    //             }   
    //         }
    //         //Add object for indexing
    //         objectsToIndex.push(firebaeObject);
    //     }
    // }
    // index.saveObjects(objectsToIndex, function(err, content){
    //     if (err){
    //         throw err;
    //     }
    //     console.log('Events --> Algolia import done');
    // });
});

module.exports = initEventsIndex;