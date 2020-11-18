$(document).ready(function () {
    // membuat fungsi dari masing2 field input dan pesan errornya
    $('.error').hide();
    $('.namaDepan').focus(function () {
        $(this).addClass('inputs');
    });
    $('.namaBelakang').focus(function () {
        $(this).addClass('inputs');
    });
    $('.provinsi').focus(function () {
        $(this).addClass('inputs');
    });
    $('.kabKota').focus(function () {
        $(this).addClass('inputs');
    });
    $('.checkIn').focus(function () {
        $(this).addClass('inputs');
    });
    $('.checkOut').focus(function () {
        $(this).addClass('inputs');
    });
    $('.noTelp').focus(function () {
        $(this).addClass('inputs');
    });
    $('.alamat').focus(function () {
        $(this).addClass('inputs');
    });
    $('.emailadd').focus(function () {
        $(this).addClass('inputs');
    });
    $('.errors').addClass('error');
    $('.errors').hide();
    $('.submit').click(function (event) { // fungsi dijalankan ketika user mengklik button submit
        // jika nama yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.namaDepan').val();
        var len = data.length;
        if (len < 1) {
            $('.namaDepan').next().show();
        } else {
            $('.namaDepan').next().hide();
        }
        data = $('.namaBelakang').val();
        var len = data.length;
        if (len < 1) {
            $('.namaBelakang').next().show();
        } else {
            $('.namaBelakang').next().hide();
        }
        // jika provinsi yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.provinsi').val();
        var len = data.length;
        if (len < 1) {
            $('.provinsi').next().show();
        } else {
            $('.provinsi').next().hide();
        }
        // jika kabKota yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.kabKota').val();
        var len = data.length;
        if (len < 1) {
            $('.kabKota').next().show();
        } else {
            $('.kabKota').next().hide();
        }
        // jika noTelp yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.noTelp').val();
        var len = data.length;
        if (len < 1) {
            $('.noTelp').next().show();
        } else {
            $('.noTelp').next().hide();
        }
        // jika checkIn yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.checkIn').val();
        var len = data.length;
        if (len < 1) {
            $('.checkIn').next().show();
        } else {
            $('.checkIn').next().hide();
        }
        // jika CheckOut yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.checkOut').val();
        var len = data.length;
        if (len < 1) {
            $('.checkOut').next().show();
        } else {
            $('.checkOut').next().hide();
        }
        // jika alamat yang dimasukan panjangnya tidak lebih dari 0  maka akan menampilkan error selain itu akan disembunyikan
        data = $('.alamat').val();
        var len = data.length;
        if (len < 1) {
            $('.alamat').next().show();
        } else {
            $('.alamat').next().hide();
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
        event.preventDefault();
        
    });
});
// Membuat seleksi dari form email agar format email harus sesuai
function valid_email(email) { 
    var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return pattern.test(email);
}