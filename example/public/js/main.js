console.log('Nau Studio');

$(function() {
	$('.ui.radio.checkbox').checkbox();

	$('#amount-input').autoNumeric('init');
	$('.result__paying-info__value').autoNumeric('init');

	$('.ui .autofill-checkbox').on('change', function(e) {
		var isChecked = e.target.checked;
		var form = document.querySelectorAll('.form')[0].elements;

		if (isChecked) {
			form.firstname.value = 'The';
			form.lastname.value = 'Nguyen';
			form.billingStreet.value = '194 Tran Quang Khai';
			form.billingCity.value = '123'; // district
			form.billingCountry.value = 'VN';
			form.billingPostCode.value = '700000';
			form.billingStateProvince.value = 'Hà Nội';
			form.email.value = 'the123456@gmail.com';
			form.amount.value = '12345';
			form.phoneNumber.value = '0123456789';
		} else {
			form.firstname.value = '';
			form.lastname.value = '';
			form.billingStreet.value = '';
			form.billingCountry.value = '';
			form.billingCity.value = '';
			form.billingPostCode.value = '';
			form.billingStateProvince.value = '';
			form.amount.value = '';
			form.email.value = '';
			form.phoneNumber.value = '';
		}
	});
});
