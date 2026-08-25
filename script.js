// TABS EXERCISE
// Goal: clicking a tab button should:
//   1. make that button "active" (and un-active the others)
//   2. show its matching panel (and hide the others)
//
// Notes on the markup:
// - Each button has a data-tab attribute, e.g. data-tab="design"
// - Each panel has a matching data-panel attribute, e.g. data-panel="design"
// - You'll need to match them up using those values.
// - Read a data attribute in JS like this: element.dataset.tab

// STEP 1
// Grab all the tab buttons, and all the tab panels.
// (Hint: you'll need querySelectorAll for both — there are multiple of each)

const tabButtons = ; // TODO
const tabPanels = ; // TODO


// STEP 2
// Loop over the buttons. For each one, add a click listener.

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {

    // STEP 3
    // Remove "active" from ALL buttons, then add it to just the one clicked.
    // (Hint: loop over tabButtons again inside here, classList.remove on each)

    // TODO


    // STEP 4
    // Remove "active" from ALL panels, then add it to just the matching one.
    // (Hint: you need to find the panel whose data-panel matches this
    //  button's data-tab. The array method `find` from earlier sessions
    //  is useful here.)

    // TODO

  });
});
