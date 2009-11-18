function initializeSubnemEngine(){
   var c = E.canvas(500, 500);          // create a new canvas element
   var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
   canvas.fill = [0,0,0,0.8];           // set the Canvas background to 0.8 opacity black
   canvas.clear = true;                 // don't show previous frame
   canvas.append(starfield_one);
   canvas.append(starfield_two);
   canvas.append(starfield_three);
   canvas.append(clone_one);
   canvas.append(clone_two);
   canvas.append(clone_three);
   canvas.append(player_ship);
   document.body.appendChild(c);        // append the canvas element to document body
}
