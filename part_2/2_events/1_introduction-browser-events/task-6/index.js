'use strict';

const panes = document.querySelectorAll('.pane');

for (const pane of panes) {
  pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');

  pane.firstChild.onclick = function () {
    pane.remove();
  }
}
