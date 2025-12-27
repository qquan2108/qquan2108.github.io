document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('is-ready');
});

var form = document.getElementById('donateForm');
var qrCode = document.getElementById('qrCode');
var infoArea = document.querySelector('.info-area');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Read amount from input
    var amount = document.getElementById('amount').value;

    // VietQR quick link
    var bank_id = '970422';
    var account_no = '933349999';
    var template = 'compact2';
    var description = 'du an nuoi anh';
    var account_name = '';

    var qrCodeUrl = 'https://img.vietqr.io/image/' + bank_id + '-' + account_no + '-' + template + '.png?amount=' + amount + '&addInfo=' + encodeURIComponent(description) + '&accountName=' + encodeURIComponent(account_name);

    // Render QR code with animation
    qrCode.innerHTML = '<img src="' + qrCodeUrl + '" alt="QR Code"> <p>Vui lAýng quAct mAœ QR trA¦n Ž` ¯Ÿ donate</p>';
    if (infoArea) {
        infoArea.classList.add('has-qr');
    }
    qrCode.classList.remove('pop');
    void qrCode.offsetWidth;
    qrCode.classList.add('pop');
});
