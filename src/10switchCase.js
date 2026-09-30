let browser = 'safari';
switch (browser) {
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;
    default:
        console.log('invalid browser...plz pass the right browser..');
        break;
}

//0 to 100
let marks = 10;
switch (marks) {
    case 10:
        console.log('pass');
        break;
    default:
        break;
}

let flag = true;
switch (flag) {
    case true:

        break;

    default:

        break;
}

// //switch case use cases:
// //1. cross browser
// //2. multi env: QA, DEV, STAGE, UAT, PROD
// //3. multi user (RBAC): user, admin, customer, vendor, partner
// //4. Localization: eng, spanish, arabic, chinese
// //5. uber: booking: mini, sedna, suv, luxury, 
// //6. payment: upi, cc, db, paypal, stripe, wire
// //7. api status code: 200, 400, 500, 300
// //8. OS: mac, windows, linux, cloud, server
// //9. laon type: home, car, edu
//10. AB testing

//a e i o u - vowels
let ch = 'x';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch + '  is a vowel');
        break;
    default:
        console.log(ch + ' is a consonant');
        break;
}