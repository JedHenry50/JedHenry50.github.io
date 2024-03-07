

  window.onload = function(){
  var img = document.getElementById('footballPicture')

  var dx = 1; // Horizontal movement
  var dy = 1; // Vertical movement

  function moveImage() {
       // Get current position
       var topPos = parseInt(img.style.top) || 0;
       var leftPos = parseInt(img.style.left) || 0;

       // Calculate new position
       var newTop = topPos + dy;
       var newLeft = leftPos + dx;

       // Check if the image hits the bottom or top edge
       if (newTop + img.height >= window.innerHeight || newTop <= 0) {
           dy = -dy; // Reverse vertical direction
       }

       // Check if the image hits the right or left edge
       if (newLeft + img.width >= window.innerWidth || newLeft <= 0) {
           dx = -dx; // Reverse horizontal direction
       }

       // Update the image position
       img.style.top = newTop + 'px';
       img.style.left = newLeft + 'px';

       // Call the function recursively
       requestAnimationFrame(moveImage);
   }

// Start animation
moveImage();
  };

  function slideInExplanation(linkId, explanationId) {
    var link = document.getElementById(linkId);
    var explanation = document.getElementById(explanationId);
    
    link.addEventListener('click', function(event) {
        event.preventDefault();
        if (explanation.classList.contains('hidden')) {
            // If explanation is hidden, slide it in
            explanation.classList.remove('hidden');
            explanation.classList.add('slide-in');
        } else {
            // If explanation is visible, slide it out
            explanation.classList.remove('slide-in');
            explanation.classList.add('hidden');
        }
    });
}

// Call the function for each link
slideInExplanation('link1', 'explanation1');
slideInExplanation('link2', 'explanation2');
slideInExplanation('link3', 'explanation3')
slideInExplanation('link4', 'explanation4')



