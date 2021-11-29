function showModal() {
    $('#contact_type_modal').modal('show');
  };
  
  
  $(document).ready(function () {
    $('#contact_type').dropdown({
                                  action: function pitchDetailModal(text, value) {
                                      $('#contact_detail_modal').modal('show');
                                  },
                                  placeholder: 'Contact Type',
                                  values: [
                                      {
                                          name: 'Hard Groundball',
                                          value: 'hard_groundball'
                                      },
                                      {
                                        name: 'Groundball',
                                        value: 'groundball'
                                      },
                                      {
                                        name: 'Soft Groundball',
                                        value: 'soft_groundball'
                                      },
                                      {
                                        name: 'Hard Flyball',
                                        value: 'hard_flyball'
                                      },
                                      {
                                        name: 'Flyball',
                                        value: 'Flyball'
                                      },
                                      {
                                        name: 'Soft Flyball',
                                        value: 'soft_flyball'
                                      },
                                      {
                                        name: 'Hard Linedrive',
                                        value: 'hard_linedrive'
                                      },
                                      {
                                        name: 'Linedrive',
                                        value: 'linedrive'
                                      },
                                      {
                                        name: 'Soft Linedrive',
                                        value: 'soft_linedrive'
                                      },
                                      {
                                          name: 'Bunt',
                                          value: 'bunt'
                                      }
                                  ]
                              });
  });
  
  
  function showPitchLocationModal(text, value) {
    $('#contact_location_modal').modal('show');
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