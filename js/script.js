$(document).on('click', '[data-toggle="modal"]', function () {
  let target = $(this).attr('data-target');
  console.log(target);
  $(target).addClass('show');
  return false;
});

$('.modal-dialog .modal__close-button').on('click', function () {
  $(this).closest('.modal-window').removeClass('show');
  return false;
});

$(document).keydown(function (e) {
  if (e.keyCode === 27) {
    e.stopPropagation();
    $('.modal-window').removeClass('show');
    return false;
  }
});

$('.modal-window').click(function (e) {
  if ($(e.target).closest('.modal-dialog').length == 0) {
    $('.modal-window').removeClass('show');
  }
});
