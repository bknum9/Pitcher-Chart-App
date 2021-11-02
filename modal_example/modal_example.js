function showModal(){
        $('#pitch_type_modal').modal('show');
}
$(document).ready(function(){
          $('#pitch_type') .dropdown({
    action: function pitchDetailModal(text, value){
        $('#pitch_detail_modal').modal('show');
    },
    placeholder: 'Pitch Type',
    values: [
      {
        name: 'Four-seam Fastball',
        value: 'fastball_4',
      },
      {
        name     : 'Two-seam Fastball',
        value    : 'fastball_2'
      }
    ]
  })});