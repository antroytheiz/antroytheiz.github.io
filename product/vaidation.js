$(document).ready(function () {
    // membuat fungsi dari masing2 field input dan pesan errornya
    $('.error').hide();
    $('.nama').focus(function () {
        $(this).addClass('inputs');
    });
    $('.alamat').focus(function () {
        $(this).addClass('inputs');
    });
    $('.password').focus(function () {
        $(this).addClass('inputs');
    });
    $('.emailadd').focus(function () {
        $(this).addClass('inputs');
    });
    $('.errors').addClass('error');
    $('.errors').hide();
    $('.submit').click(function (event) { // fungsi dijalankan ketika user mengklik button submit
        // jika nama yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.nama').val();
        var len = data.length;
        if (len < 1) {
            $('.nama').next().show();
        } else {
            $('.nama').next().hide();
        }
        // jika alamat yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.alamat').val();
        var len = data.length;
        if (len < 1) {
            $('.alamat').next().show();
        } else {
            $('.alamat').next().hide();
        }
        // jika password yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.password').val();
        var len = data.length;
        if (len < 1) {
            $('.password').next().show();
        } else {
            $('.password').next().hide();
        }
        // jika email yang dimasukan tidak valid formatnya maka akan menampilkan error dari email selain itu akan disembunyikan
        data = $('.emailadd').val();
        if (valid_email(data)) {
            $('.emailadd').next().hide();
        } else {
            $('.emailadd').next().show();
        }
        // jika countnya 0 maka akan menampilkan error dari checkbox s&k dan membuat css ml:0 selain itu akan disembunyikan
        var count = 0;
        $('div').find(':checkbox').each(function () {
            if ($(this).is(':checked')) {
                count++;
            }
        });
        if (count == 0) {
            $('.errors').css({
                'margin-left': 0
            }).show();
        } else {
            $('.errors').hide();
        }
        // jika countnya 0 maka akan menampilkan error dari option select departement selain itu akan disembunyikan
        count = $('select option:selected').val();
        if (count == 0) {  
            $('.department').next().show();
        } else {
            $('.department').next().hide();
        }
        event.preventDefault();
        
    });
});
// Membuat seleksi dari form email agar format email harus sesuai
function valid_email(email) { 
    var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return pattern.test(email);
}