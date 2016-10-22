'use strict';

const assert = require('assert');
let SoundFontLibrary = require('../index');

describe('midi-js-soundfonts', function(){
  it('should create with types names and format', function(){
    let instruments = new SoundFontLibrary("MusyngKite", "banjo", "mp3");
    assert(instruments, "instruments failed to load");
  });

  it('should create with types and names', function(){
    let instruments = new SoundFontLibrary("MusyngKite", "banjo");
    assert(instruments, "instruments failed to load");
  });

  it('should create with types', function(){
    this.timeout(40000);
    let instruments = new SoundFontLibrary("MusyngKite");
    assert(instruments, "instruments failed to load");
  });

  it('should create with defaults', function(){
    this.timeout(60000);
    let instruments = new SoundFontLibrary();
    assert(instruments, "instruments failed to load");
  });
});