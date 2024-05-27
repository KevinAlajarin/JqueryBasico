$(document).ready(function() {
    $('#hideBtn').click(function() {
        $('#imagen').hide();
        $('#titulo').text('¡No tenemos ninguna imagen!');
    });

    $('#showBtn').click(function() {
        $('#imagen').show();
        $('#titulo').text('¡Mirá la siguiente imagen!');
    });
});
