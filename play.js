function showModal() {
  $('#pitch_type_modal').modal('show');
}


$(document).ready(function () {
  $('#pitch_type').dropdown({
                                action: function pitchDetailModal(text, value) {
                                    $('#pitch_detail_modal').modal('show');
                                },
                                placeholder: 'Pitch Type',
                                values: [
                                    {
                                        name: 'Four-seam Fastball',
                                        value: 'fastball_4'
                                    },
                                    {
                                        name: 'Two-seam Fastball',
                                        value: 'fastball_2'
                                    },
                                    {
                                        name: 'Curveball',
                                        value: 'curveball'
                                    },
                                    {
                                        name: 'Slider',
                                        value: 'slider'
                                    },
                                    {
                                        name: 'Changeup',
                                        value: 'changeup'
                                    },
                                    {
                                        name: 'Other',
                                        value: 'other_pitch'
                                    }
                                ]
                            });
});


function showPitchLocationModal(text, value) {
  $('#pitch_location_modal').modal('show');
}

// document.getElementById('#ball_top_left').click(function () {
//     alert('Handler for .click() called.');
// });

$(document).ready(function () {
  $('.menu .item').tab({history: false});
});
$(document).ready(function () {
  $('#position_dropdown')
      .dropdown()
  ;
});

$(document).ready(function () {
  var lineup_edit_link = document.getElementById('lineup_edit');
  
  lineup_edit_link.onclick = function () {
      $('#edit_lineup_modal').modal('show');
  };
});
