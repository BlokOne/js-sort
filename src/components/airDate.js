import AirDatepicker from 'air-datepicker';

// new AirDatepicker('.category__date', {
//   inline: false,
//   isMobile: true,
//   autoClose: true,
//   position: 'right center',
//   range: true,
//   multipleDatesSeparator: ' - '
// });
new AirDatepicker('.category__date-input-from', {
  autoClose: true,
  position: 'bottom left ',
  onSelect({ date, formattedDate, datepicker }) {
    console.log(date)
  }
})

new AirDatepicker('.category__date-input-to', {
  autoClose: true,
  position: 'bottom right',
  onSelect({ date, formattedDate, datepicker }) {
    console.log(date)
  }
})

