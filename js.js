// Get all checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Loop through each checkbox
for(var i = 0; i < checkboxes.length; i++) {
  // Add event listener to each checkbox
  checkboxes[i].addEventListener('change', function(e) {
    // Get the previous sibling element
    var prevSibling = e.target.previousElementSibling;
    
    // Check if the checkbox is checked
    if(e.target.checked) {
      // Change the previous sibling's style or content
      prevSibling.style.fontWeight = '700';
    } else {
      // Revert the changes if the checkbox is unchecked
      prevSibling.style.fontWeight = '400';
    }
  });
}
