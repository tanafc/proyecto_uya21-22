document.addEventListener('DOMContentLoaded', async function() {
  $(document).ready(function(){
    $('#date-from').datepicker({
      format: 'dd/mm/yyyy',
      firstDay: 1,
      minDate: new Date(2018, 1, 1),
      maxDate: new Date(),
      i18n: {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        weekdaysAbbrev: ['D', 'L', 'M', 'X', 'J', 'V', 'S']
      },
    });
  });

  $(document).ready(function(){
    $('#date-to').datepicker({
      format: 'dd/mm/yyyy',
      firstDay: 1,
      defaultDate: new Date(),
      minDate: new Date(2018, 1, 1),
      maxDate: new Date(),
      i18n: {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        weekdaysAbbrev: ['D', 'L', 'M', 'X', 'J', 'V', 'S']
      },
    });
  });

  $(document).ready(function() {
    $('input#input_title, input#input_description').characterCounter();
  });
});