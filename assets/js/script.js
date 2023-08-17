// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  // can't figure out how to get words to save !! sorry but i did 
  //figure live action time hahaha im great haha nah i need to work harder
  function loadEvents() {
    $('.time-block').each(function () {
      var storeKey = $(this).attr('id');
      var storedVal = localStorage.getItem(storeKey);

      if (storedVal) {
        $(this).find('.description').val(JSON.parse(storedVal));
      }
    });
  }
  
  function saveEvent(event) {
    var button = $(event.target);
    var timeBlock = button.closest('.time-block');
    var storedVal = timeBlock.find('.description').val();
    var storeKey = timeBlock.attr('id');

    if (storeKey && storedVal !== '') {
      localStorage.setItem(storeKey, JSON.stringify(storedVal));
    }

    console.log(storedVal);
  }
  
  // TODO: Add code to display the current date in the header of the page.
function updateDateTime() {
    const currentDate = new Date();
    
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, optionsDate);
  
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentDate.toLocaleTimeString(undefined, optionsTime);
  
    document.getElementById('date').innerText = formattedDate;
    document.getElementById('time').innerText = formattedTime;
  }
  
  // Call the function initially
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
   