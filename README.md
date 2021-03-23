# MIDI.js Soundfonts

[MIDI.js](https://github.com/mudcube/MIDI.js) is a fantastic library for MIDI sequencing and playback in Javascript. It comes packaged with a [soundfont-generator](https://github.com/gleitz/MIDI.js/blob/master/generator/ruby/soundfont_builder.rb) that is unfortuantely a little difficult to get up and running (requires installation of Ruby, Node.js, FluidSynth, Lame, etc.)

This project contains pre-rendered [General MIDI](https://en.wikipedia.org/wiki/General_MIDI) soundfonts that can be used immediately with MIDI.js.

Soundfonts Available
----

- Fluid Soundfont
    - Generated from [FluidR3_GM.sf2](http://www.synthfont.com/SoundFonts/FluidR3_GM.sfArk) (148 MB uncompressed)
    - Released under [Creative Commons Attribution 3.0 license](https://creativecommons.org/licenses/by/3.0/us/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/

- Musyng Kite Soundfont
    - Generated from [Musyng Kite.sfpack](http://www.synthfont.com/SoundFonts/Musyng.sfpack) (1.75 GB uncompressed)
    - Released under [Creative Commons Attribution Share-Alike 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/MusyngKite/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/MusyngKite/

- FatBoy Soundfont
    - Generated from [FatBoy.sf2](https://fatboy.site) (320 MB uncompressed)
    - Released under [Creative Commons Attribution Share-Alike 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/FatBoy/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/FatBoy/

- Tabla Soundfont
    - Tabla is a popular Indian percussion instrument. Not all notes contain sound in Tabla.sf2, sounds are mapped on notes C4 to E6. Use sound font software like [Viena](https://www.synthfont.com/index.html) or `sforzando` to find details of each sound and MIDI key.
    - Generated from [Tabla.sf2](https://gleitz.github.io/midi-js-soundfonts/Tabla/Tabla.sf2) (4.06 MB uncompressed)
    - Instrument names as .json file [here](https://gleitz.github.io/midi-js-soundfonts/Tabla/names.json)
    - URL prefix to fetch files: https://gleitz.github.io/midi-js-soundfonts/Tabla/
    - Note: Tabla is not standard MIDI instrument, you need to map it to an appropriate instrument in your program. For example, you can map it to `synth_drum`:

    ```javascript
    MIDI.loadPlugin({
      soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/Tabla/"
      instrument: "synth_drum",
      onsuccess: function() { console.log("Tabla loaded as instrument synth_drum") }
    });

    MIDI.noteOn(0, 60, 127); // On channel 0 (default), play note C4 (id 60) with max velocity (127)

    ```

Notes
-----

- Fork of MIDI.js with parallized soundfont generation [available here](https://github.com/gleitz/MIDI.js).
- You can fetch Soundfont files directly from this repository, so you can access them directly from a browser. Use the prefix URL followed by the instrument name. For example: https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/marimba-mp3.js
