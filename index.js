'use strict';

const fs = require('fs');
const path = require('path');

const allowedFormats = ["mp3", "ogg"];
const namesList = {
  MusyngKite: require('./MusyngKite/names.json'),
  FluidR3_GM: require('./FluidR3_GM/names.json'),
};
/**
 *
 * @param types
 * @param names
 * @param formats
 * @returns {*}
 */
module.exports = function(types, names, formats) {
  this.names = names = _setupInput(names);
  this.types = types = _checkForAllowed(_setupInput(types), Object.keys(namesList));
  this.formats = formats = _checkForAllowed(_setupInput(formats), allowedFormats);
  /**
   *
   * @param input
   * @returns {*}
   */
  function _setupInput(input){
    switch (typeof input) {
      case 'string':
        return input.replace(/ /g,'').split(",");
      case 'object':
        if(!Array.isArray(input)) throw new Error('Input must be an array!');
        return input;
      case 'undefined':
        return [];
      default:
        throw new Error("Not accepted input for types");
    }
  }

  function _checkForAllowed(list, filters){
    if(list.length === 0 ) return true;
    let match = false;
    list.filter((item)=>{
      filters.forEach((filter)=>{
        if(filter = item) match = true;
      });
    });
    if(! match) throw new Error(`${list.toString()} is not allowed in ${filters.toString()}`);
    else return list;
  }

  /**
   * Filter a list of names
   * @param item
   * @param filters
   * @returns {boolean}
   * @private
   */
  const _filterFor = function(item, filters) {
    //No names in filter will return all
    if (filters.length === 0) return true;

    //Match any names
    let match = false;
    filters.forEach((filter)=> {
      if (filter === item)match = true
    });

    return match
  };

  /**
   * Maps the names.json to a requires statement
   * @param names
   * @param folderName
   * @returns {Array}
   */
  const _mapNamesToDictionary = (names, folderName) => {
    var dictionary = {};
    names.forEach((name) => {

      let instrument = {};
      switch(formats.length){
        case 1:
          instrument = require(`./${folderName}/${name}-${formats[0]}.js`);
          break;
        default:
          instrument = {
            mp3: require(`./${folderName}/${name}-mp3.js`),
            ogg: require(`./${folderName}/${name}-ogg.js`),
          };
      }

      dictionary[name] = instrument;
    });

    return dictionary;
  };



  switch(types.length){
    case 1: // Return the types dictionary
      return _mapNamesToDictionary(namesList[types[0]].filter((item)=>_filterFor(item, names)), types[0]);
    default: // Either no types exist or all of them do
      let sendback = {};
      Object.keys(namesList).map((key) => {
        sendback[key] = _mapNamesToDictionary(namesList[key].filter((item)=>_filterFor(item, names)), key);
      });
      return sendback;
  }
};


function addexports() {
  Object.keys(namesList).map((key) => {
    namesList[key].forEach((name) => {
      console.log(`Running on ${key}: ${name}`);
      let append = `if(typeof module !== 'undefined' && module.exports ) module.exports = MIDI.Soundfont.${name};`;
      // MP3 files
      fs.appendFileSync(path.normalize(`./${key}/${name}-mp3.js`), append);
      // OGG files
      fs.appendFileSync(path.normalize(`./${key}/${name}-ogg.js`), append);
    });
  });
}
//addexports();