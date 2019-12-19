'use strict';

function startTime() {
    let date = new Date();
    let h = parseInt(date.getHours());
    let m = parseInt(date.getMinutes());
    let s = parseInt(date.getSeconds());
    showDigits(h, 'hours');
    showDigits(m, 'minutes');
    showDigits(s, 'seconds');
    setTimeout('startTime()', 1000);
}

function showDigits(digits, type) {
    let secondNumber = digits % 10;
    let firstNumber = (digits - secondNumber) / 10;
    switch (type) {
        case 'hours':
            showNumber('imgNumOneH', firstNumber);
            showNumber('imgNumTwoH', secondNumber);
            break;

        case 'minutes':
            showNumber('imgNumOneM', firstNumber);
            showNumber('imgNumTwoM', secondNumber);
            break;

        case 'seconds':
            showNumber('imgNumOneS', firstNumber);
            showNumber('imgNumTwoS', secondNumber);
            break;
    }
}

function showNumber(parent, index) {
    let numberImg = document.getElementById(parent);
    let picPath = 'number\\' + arrayPic[index];
    numberImg.setAttribute('src', picPath);
}


