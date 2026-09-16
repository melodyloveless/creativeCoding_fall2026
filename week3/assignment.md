## Iteration Generation
Using a recursive or iterative logic, create a drawing that repeats a simple form into a generative pattern. Drawing inspiration from early computer artists like Molnar, create a program that applies a particular transformation iteratively. For week 4, you will use this program to generate an SVG file that we will render using a pen plotter.

[Template: p5.Polar](https://drive.google.com/file/d/1a50hGHNNjaWkMv-mvw74qwdkseopQfAg/view?usp=drive_link){:target="_blank"}
- [Review this tutorial](https://happycoding.io/tutorials/p5js/libraries){:target="_blank"} on how to attach libraries to your project

The following example logic may be helpful as you determine how to create your project:
- First, create the basis for your pattern as a single instance. Try to constrain this drawing to around 100px by 100px. 
- Draw a shape. Then, repeat your shapes using a for loop on the x axis
- Create a two dimensional for loop (aka a nested for loop), repeating your shapes down the Y axis as well.
- Once you have a repeating pattern that fills the entire canvas, experiment with ways of shifting the color, style or transformation of the shapes as they advance down the X or Y axis.
- Bonus Goals: 
    - Experiment with ways of incorporating mouse input to manipulate an aspect of the drawing (color, size of certain elements, transformations, etc).
    - Incorporate randomness
- Create a new sketch/program by duplicating your work. In this new file, make a version of your initial sketch that uses the [p5.Polar library](https://github.com/liz-peng/p5.Polar)
- Share both sketches on your GitHub for this course
- Create a brief description of your exploration and process. 
    - Required Talking Points: Discuss your original drawing. Then, share how does your drawing using p5.Polar differ from your original version. How did your work transform throughout this process? What does using for loops and/or p5.Polar afford you to experiment with that a 'brute force' method might not account for? 
    - See this page for 'brute force' vs for loop vs p5.Polar comparison: [https://github.com/liz-peng/p5.Polar](https://github.com/liz-peng/p5.Polar)

Looking ahead: 
- Next week, you will continue to refine this sketch and revise it for a pen plotter using the [svg library](https://github.com/golanlevin/p5.plotSvg)
- You will need to complete required training to access the pen plotter. Sign up for training here: [https://wp.nyu.edu/idmtech/training/](https://wp.nyu.edu/idmtech/training/). 