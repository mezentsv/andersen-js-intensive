const $width = document.getElementById('width');
const $height = document.getElementById('height');
const $color = document.getElementById('color');
const $textField = document.querySelector('.text-field');
const $addBtn = document.getElementById('add-btn');
const $createBtn = document.getElementById('create');

function createBlock() {
  const $newWrapBlock = document.querySelector('.generated-wrap');
  const $textFields = document.querySelectorAll('.text-field');

  const $block = document.querySelector('.generated-block');

  if ($block) {
    $block.remove();
  }

  if ($width.value < 50 || width.value > 1000) {
    alert('Width should be in range of 50 - 1000px');
    return;
  }
  if ($height.value < 50 || $height.value > 600) {
    alert('Height should be in range of 50 - 600px');
    return;
  }

  $textFields.forEach((field) => {
    if (field.value.length < 1) {
      alert('Text in the field should be at least one character long');
      throw new Error(
        'Text in the field should be at least one character long'
      );
    }
  });

  const newBlock = document.createElement('div');
  newBlock.classList.add('generated-block');
  newBlock.style.width = `${$width.value}px`;
  newBlock.style.height = `${$height.value}px`;
  newBlock.style.border = '1px solid black';
  newBlock.style.backgroundColor = $color.value;

  $textFields.forEach((field) => {
    const caption = document.createElement('p');
    caption.innerText = field.value;
    newBlock.append(caption);
  });

  $newWrapBlock.classList.add('generated-wrap-show');
  $newWrapBlock.append(newBlock);
}

function addTextField() {
  const $textFieldContainer = document.querySelector('.text-fields-container');

  const textFieldWrapper = document.createElement('div');
  textFieldWrapper.classList.add('text-field-wrapper');

  const textArea = document.createElement('textarea');
  textArea.name = 'text-field';
  textArea.classList.add('text-field');
  textArea.placeholder = 'Type here...';
  textArea.required = true;

  const removeBtn = document.createElement('div');
  removeBtn.classList.add('delete-button');
  removeBtn.innerHTML = '-';
  removeBtn.addEventListener('click', () =>
    removeBtn.closest('.text-field-wrapper').remove()
  );

  textFieldWrapper.append(textArea);
  textFieldWrapper.append(removeBtn);
  $textFieldContainer.append(textFieldWrapper);
}

$addBtn.addEventListener('click', () => addTextField());

$createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createBlock();
});
