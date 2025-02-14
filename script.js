document.getElementById('donateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ textbox
    var amount = document.getElementById('amount').value;

    // Tạo URL mã QR code, API: https://www.vietqr.io/danh-sach-api/link-tao-ma-nhanh/
    var bank_id = '970422'; 
    var account_no = '699496';
    var template = 'compact2';
    var description = 'donate cho tao';
    var account_name = '';

    var qrCodeUrl = 'https://img.vietqr.io/image/' + bank_id + '-' + account_no + '-' + template + '.png?amount=' + amount + '&addInfo=' + encodeURIComponent(description) + '&accountName=' + encodeURIComponent(account_name);

    // Hiển thị mã QR code
    document.getElementById('qrCode').innerHTML = '<img src="' + qrCodeUrl + '" alt="QR Code"> <p>Vui lòng quét mã QR trên để donate</p>';
});
