$(document).ready(function() {
    $('#taskForm').submit(function(event) {
      event.preventDefault();
      const taskName = $('#taskInput').val();
      if (taskName.trim() !== '') {
        const listItem = $('<li>').text(taskName);
        $('#taskList').append(listItem);
        $('#taskInput').val('');
      }
    });

    $(document).on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });