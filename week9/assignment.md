## Audioreactive visualization

*To accomodate our in-person workshop, in leiu of an in-person lecture/demo, you all are asked to review materials on your own and create an audioreactive visualization with p5.js.*

### Definitions
    - audio reactive (or audioreactive) - a work and/or environment that responds/adapts to incoming audio
    - audiovisual (or audio-visual) - relating to both hearing and sight

**Goal:** To create an audioreactive sketch, featuring an audio input of your choice. This input should be measured/analyzed, affecting multiple visual properties of your sketch.

### Instructions
- At a minimum, before beginning, review the following materials:
    - [Audio](https://docs.google.com/document/d/1ulK8Uye1ImBhstP3M6S7NdVq0_-VxLAt_UugBzXpHYE/edit?usp=sharing){:target="_blank"}
    - [IDM: promises, async and await](https://idmp5.github.io/coding/promise-await/){:target="_blank"} - includes a tutorial for loading files (like samples/audio files)
    - *Review additional materials as necessary.* See this week's main page for more resources/details.
- Create a sketch that completes the following:
    - Incorporates at least one audio input (sample/audiofile, microphone, and/or oscillator) 
    - Measure at least one of the following audio properties:
        - amplitude using [p5.Amplitude](https://p5js.org/reference/p5.sound/p5.Amplitude/){:target="_blank"}
        - frequency (pitch) using [p5.FFT](https://p5js.org/reference/p5.sound/#p5.FFT){:target="_blank"}
        - Bonus goal: incorporate both
    - Create at least three relationships between the audio data and your visualization. These relationships should be clear/apparent.
- **A caveat:** [no standard bar graphs](https://www.youtube.com/watch?v=-qxA8-jS9XE){:target="_blank"}, [waveform lines](https://editor.p5js.org/melodyloveless/sketches/IlBZv2Tfh){:target="_blank"}, or [radial FFT visualizers.](https://youtu.be/h_aTgOl9J5I?si=P5ToBLVhYs682xp7){:target="_blank"}

#### Description
- Post a description and copy of your sketch on your website for this class. 
- In this description, make sure to discuss:
    - Your audio source and the data that you analyzed and incorporated into your sketch.
    - How does your visual illustrate, contradict, and/or interpret the audio?
    - Why did you choose these mappings?
- Make sure to include citations for resources and materials (like audio files)

**Optional:** You may extend a previous sketch or assignment. If you do, link your original code and briefly list what you added or changed in your description. The new sketch must meet all requirements on its own.

There is no provided template this week. You can combine examples from my notes with [past templates for assignments.](https://drive.google.com/drive/folders/1j3lzPhCOiQ2_FA4ugHHcz3nQqnEN6GDh)

--- 

### Sketch Ideas
- Increase size of shapes based on the amplitude (loudness) of a sound
- Increase amount of shapes based on amplitude of incoming sound
- Change the speed of animation/movement based on amplitude 
- Change color and size of shape based on frequency (pitch)
- Incorporate conditionals based on measurements of audio data (if X is greater than Y, draw ____)