# MIDI.js Soundfonts

[MIDI.js](https://github.com/mudcube/MIDI.js) is a fantastic library for MIDI sequencing and playback in Javascript. It comes packaged with a [soundfont-generator](https://github.com/gleitz/MIDI.js/tree/master/soundfont-generator/) that is unfortuantely a little difficult to get up and running (requires installation of Ruby, Node.js, FluidSynth, Lame, etc.)

This project contains pre-rendered [General MIDI](https://en.wikipedia.org/wiki/General_MIDI) soundfonts that can be used immediately with MIDI.js.

Soundfonts Available
----

- Fluid-Soundfont
    - Generated from [FluidR3_GM.sf2](https://www.musescore.org/download/fluid-soundfont.tar.gz) (141 MB uncompressed)
    - Released under [Creative Commons Attribution 3.0 license](https://creativecommons.org/licenses/by/3.0/us/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/

- Musyng Kite Soundfont
    - Generated from [Musyng Kite.sfpack](https://www.synthfont.com/punbb/viewtopic.php?id=167) (1 GB uncompressed)
    - Released under [Creative Commons Attribution Share-Alike 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/MusyngKite/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/MusyngKite/

- FatBoy Soundfont
    - Generated from [FatBoy.sf2](https://fatboy.site) (330 MB uncompressed)
    - Released under [Creative Commons Attribution Share-Alike 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/FatBoy/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/FatBoy/

- Tabla-Soundfont
    - Tabla is a popular Indian percussion instrument. Not all notes contain sound in Tabla.sf2, sounds are mapped on notes C4 to E6. Use sound font software like [Viena](https://www.synthfont.com/index.html) to find details of each sound and MIDI key.
    - Generated from Tabla.sf2 (4.06 MB uncompressed)
    - Instrument name : Tabla is not standard MIDI instrument, you need to map it to appropriate instrument in your program. For example, you can map it to `synth_drum`
    
    ```javascript
    if (typeof(MIDI) === 'undefined') var MIDI = {};
    if (typeof(MIDI.Soundfont) === 'undefined') MIDI.Soundfont = {};
    MIDI.Soundfont.synth_drum = {
    //Notes . . . 
    }
    ```
    Usage in [MIDI.js](https://github.com/mudcube/MIDI.js)
    ```javascript
    //where `channel` is synth_drum channel number
    MIDI.noteOn(channel, note, velocity, delay);
    MIDI.noteOff(channel, note, delay);
    ```
    Listen Tabla compositions played using [MIDI.js](https://github.com/mudcube/MIDI.js) on [www.vishwamohini.com](http://vishwamohini.com/music/demo-tabla.php)


Notes
-----

- Fork of MIDI.js with parallized soundfont generation [available here](https://github.com/gleitz/MIDI.js).
- You can fetch Soundfont files directly from this repository, so you can access them directly from a browser. Use the prefix URL following by the instrument name. For example: https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/marimba-mp3.js
