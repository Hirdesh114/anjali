// Web Audio API Synthesizer with rich multi-layered acoustic arrangement for Haareya trending line

class SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isPlayingBgMusic = false;
    this.musicTimeout = null;
    this.activeNodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  playChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.4);
      });
    } catch {}
  }

  playHeart() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }

  playCelebration() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      chord.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.2, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.8);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.85);
      });
    } catch {}
  }

  // Play Haareya Viral Trending Chorus Melody with harmony pads
  playHaareyaTrendingLine() {
    this.stopSongMelody();
    this.init();
    if (!this.ctx) return;

    this.isPlayingBgMusic = true;

    // Frequencies
    const G3 = 196.00, A3 = 220.00, B3 = 246.94, C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, B4 = 493.88;
    const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99;

    // Trending Chorus line: "Ooo... Haareya main dil haareya... Haareya main dil haareya!"
    const melody = [
      // "Ooo..." (Gentle glide)
      { f: G4, d: 1.2, bass: C4, chord: [E4, G4] },
      { f: A4, d: 0.8, bass: C4, chord: [E4, G4] },

      // "Haa-rey-aa..."
      { f: C5, d: 1.2, bass: C4, chord: [E4, G4] },
      { f: E5, d: 0.8, bass: C4, chord: [E4, G4] },

      // "Main dil haa-rey-aa..."
      { f: D5, d: 0.8, bass: G3, chord: [D4, G4, B4] },
      { f: C5, d: 0.8, bass: G3, chord: [D4, G4, B4] },
      { f: B4, d: 0.8, bass: G3, chord: [D4, G4, B4] },
      { f: C5, d: 1.6, bass: G3, chord: [D4, G4, B4] },

      // (Pause / Breath)
      { f: null, d: 0.4 },

      // "Haa-rey-aa..."
      { f: C5, d: 1.2, bass: A3, chord: [C4, E4, A4] },
      { f: E5, d: 0.8, bass: A3, chord: [C4, E4, A4] },

      // "Main dil haa-rey-aa..."
      { f: G5, d: 1.0, bass: F4, chord: [A4, C5] },
      { f: E5, d: 0.8, bass: F4, chord: [A4, C5] },
      { f: D5, d: 0.8, bass: F4, chord: [A4, C5] },
      { f: C5, d: 2.0, bass: F4, chord: [A4, C5] },

      // (Pause)
      { f: null, d: 0.4 },

      // "Dekha jab se chehra tera..."
      { f: C5, d: 0.6, bass: C4, chord: [E4, G4] },
      { f: D5, d: 0.6, bass: C4, chord: [E4, G4] },
      { f: E5, d: 1.0, bass: C4, chord: [E4, G4] },
      { f: E5, d: 0.8, bass: G3, chord: [D4, G4] },
      { f: D5, d: 0.8, bass: G3, chord: [D4, G4] },
      { f: C5, d: 1.2, bass: G3, chord: [D4, G4] },

      // "Main toh ho gaya deewana..."
      { f: D5, d: 0.8, bass: A3, chord: [C4, E4] },
      { f: D5, d: 0.8, bass: A3, chord: [C4, E4] },
      { f: C5, d: 0.8, bass: F4, chord: [A4, C5] },
      { f: B4, d: 0.8, bass: F4, chord: [A4, C5] },
      { f: C5, d: 2.2, bass: C4, chord: [E4, G4] },

      // (Interlude flourish)
      { f: E5, d: 0.5, bass: C4 },
      { f: G5, d: 0.5, bass: C4 },
      { f: D5, d: 0.6, bass: G3 },
      { f: C5, d: 1.4, bass: C4 },
    ];

    let noteIndex = 0;
    const tempo = 380; // ms per beat

    const playStep = () => {
      if (!this.isPlayingBgMusic || this.isMuted || !this.ctx) return;

      const item = melody[noteIndex];
      const now = this.ctx.currentTime;

      if (item && item.f) {
        // 1. Lead Melody Note (Warm rich tone)
        const oscLead = this.ctx.createOscillator();
        const gainLead = this.ctx.createGain();
        oscLead.type = 'triangle';
        oscLead.frequency.setValueAtTime(item.f, now);

        const dur = (item.d * tempo) / 1000;
        gainLead.gain.setValueAtTime(0.14, now);
        gainLead.gain.exponentialRampToValueAtTime(0.001, now + dur * 1.3);

        oscLead.connect(gainLead);
        gainLead.connect(this.ctx.destination);
        oscLead.start(now);
        oscLead.stop(now + dur * 1.35);

        // 2. Harmonic Pad chord if available
        if (item.chord) {
          item.chord.forEach((cFreq) => {
            const oscChord = this.ctx.createOscillator();
            const gainChord = this.ctx.createGain();
            oscChord.type = 'sine';
            oscChord.frequency.setValueAtTime(cFreq, now);

            gainChord.gain.setValueAtTime(0.04, now);
            gainChord.gain.exponentialRampToValueAtTime(0.001, now + dur * 1.2);

            oscChord.connect(gainChord);
            gainChord.connect(this.ctx.destination);
            oscChord.start(now);
            oscChord.stop(now + dur * 1.25);
          });
        }

        // 3. Gentle Bass note
        if (item.bass) {
          const oscBass = this.ctx.createOscillator();
          const gainBass = this.ctx.createGain();
          oscBass.type = 'sine';
          oscBass.frequency.setValueAtTime(item.bass, now);
          gainBass.gain.setValueAtTime(0.08, now);
          gainBass.gain.exponentialRampToValueAtTime(0.001, now + dur * 1.4);
          oscBass.connect(gainBass);
          gainBass.connect(this.ctx.destination);
          oscBass.start(now);
          oscBass.stop(now + dur * 1.45);
        }
      }

      const delay = item.d * tempo;
      noteIndex = (noteIndex + 1) % melody.length;

      // Loop continuously with gentle pause between chorus iterations
      const nextDelay = (noteIndex === 0) ? delay + 1200 : delay;
      this.musicTimeout = setTimeout(playStep, nextDelay);
    };

    playStep();
  }

  // Play Titli Melody
  playTitliMelody() {
    this.stopSongMelody();
    this.init();
    if (!this.ctx) return;

    this.isPlayingBgMusic = true;

    const E4 = 329.63, G4 = 392.00, A4 = 440.00, B4 = 493.88, C5 = 523.25, D5 = 587.33, E5 = 659.25;
    const melody = [
      { f: E4, d: 0.75 }, { f: G4, d: 0.75 }, { f: A4, d: 1 }, { f: C5, d: 1.5 },
      { f: B4, d: 0.75 }, { f: A4, d: 0.75 }, { f: G4, d: 1 }, { f: E4, d: 1.5 },
      { f: D4, d: 0.75 }, { f: E4, d: 0.75 }, { f: G4, d: 1 }, { f: A4, d: 2 },
      { f: C5, d: 1 }, { f: D5, d: 1 }, { f: E5, d: 1.5 }, { f: D5, d: 0.75 }, { f: C5, d: 2 },
    ];
    let noteIndex = 0;
    const tempo = 360;

    const playStep = () => {
      if (!this.isPlayingBgMusic || this.isMuted || !this.ctx) return;
      const item = melody[noteIndex];
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, now);
      const dur = (item.d * tempo) / 1000;
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur * 1.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur * 1.35);

      const delay = item.d * tempo;
      noteIndex = (noteIndex + 1) % melody.length;
      const nextDelay = (noteIndex === 0) ? delay + 1000 : delay;
      this.musicTimeout = setTimeout(playStep, nextDelay);
    };

    playStep();
  }

  playSongMelody(songId = 'haareya') {
    if (songId === 'titli') {
      this.playTitliMelody();
    } else {
      this.playHaareyaTrendingLine();
    }
  }

  stopSongMelody() {
    this.isPlayingBgMusic = false;
    if (this.musicTimeout) {
      clearTimeout(this.musicTimeout);
      this.musicTimeout = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isPlayingBgMusic) {
      this.stopSongMelody();
    }
    return this.isMuted;
  }
}

export const sound = new SoundFX();
