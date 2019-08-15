'use strict';

function createItem(){
  $('#js-shopping-list-form').submit((event) => {
    event.preventDefault();
    let item;
    console.log(event.currentTarget);
    item = $('#shopping-list-entry').val();
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    let itemName = $(event.currentTarget).parent().siblings('.shopping-item');
    if (itemName.hasClass('shopping-item__checked')) {
      itemName.removeClass('shopping-item__checked');
    }
    else {
      itemName.addClass('shopping-item__checked');
    }
  });
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).parent().parent().remove();
  });
}

$(createItem);
$(checkItem);
$(deleteItem);