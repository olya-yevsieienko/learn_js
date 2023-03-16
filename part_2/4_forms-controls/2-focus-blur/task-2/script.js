const table = document.getElementById('bagua-table');
let isEdit;

table.onclick = function (event) {
  if (isEdit) {
    return;
  }

  const td = event.target.closest('td');
  if (!td || !table.contains(td)) {
    return;
  }

  startEdit(td);
}

function startEdit(td) {
  isEdit = true;

  const area = document.createElement('textarea');
  area.className = 'textarea';
  area.value = td.innerHTML;

  area.style.width = td.offsetWidth + 'px';
  area.style.height = td.offsetHeight + 'px';

  td.classList.add('td--edit');

  const areaBtns = document.createElement('div');
  areaBtns.className = 'buttons';

  areaBtns.style.top = td.offsetHeight + 'px';

  const saveBtn = createButton('OK');
  const cancelBtn = createButton('CANCEL');

  areaBtns.append(saveBtn, cancelBtn);
  areaBtns.addEventListener('click', btnsClickHandler);

  td.append(area, areaBtns);
  area.focus();

  function btnsClickHandler(event) {
    const target = event.target;

    if (target !== saveBtn && target !== cancelBtn) {
      return;
    }

    if (target === saveBtn) {
      td.innerHTML = area.value;
    }

    isEdit = false;

    td.classList.remove('td--edit');
    areaBtns.removeEventListener('click', btnsClickHandler);
    areaBtns.remove();
    area.remove();
  }

  td.append(area, areaBtns);
  area.focus();
}

function createButton(btnText) {
  const button = document.createElement('button');
  button.textContent = btnText;

  return button;
}
