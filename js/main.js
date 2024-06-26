//1

//8
// const age = 19;
// if (age >= 18) {
// 	console.log('siz balohat yoshdasiz');
// }
//9
// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// 	if (i === 3) {
// 		console.log(i);
// 		break;
// 	}
// } while (i < 6);
//10
// let i = 0;
// do {
// 	i++;
// 	if (i === 3) {
// 		continue;
// 	}
// 	console.log(i);
// } while (i < 6);
//11
// for (let i = 1; i <= 100; i++) {
// 	if (i === 50) {
// 		break;
// 	}
// 	console.log(i);
// }
//12
// for (let i = 1; i <= 100; i++) {
// 	if (i === 50) {
// 		continue;
// 	}
// 	console.log(i);
// }
//swich case
//1
// let day = 10;
// let days;
// switch (day) {
// 	case 0:
// 		days = 'Yakshanba';
// 		break;
// 	case 1:
// 		days = 'Dushanba';
// 		break;
// 	case 2:
// 		days = 'Seshanba';
// 		break;
// 	case 3:
// 		days = 'Chorshanba';
// 		break;
// 	case 4:
// 		days = 'Payshanba';
// 		break;
// 	case 5:
// 		days = 'Juma';
// 		break;
// 	case 6:
// 		days = 'Shanba';
// 		break;
// 	default:
// 		days = "Noto'g'ri kun";
// }
// console.log(days);
//2
// let maosh = 10;
// let soliq;
// switch (maosh) {
// 	case 10:
// 		soliq = 'Sizning soliq miqdoringiz 1%';
// 		break;
// 	case 20:
// 		soliq = 'Sizning soliq miqdoringiz 2%';
// 		break;
// 	case 30:
// 		soliq = 'Sizning soliq miqdoringiz 3%';
// 		break;
// 	case 40:
// 		soliq = 'Sizning soliq miqdoringiz 4%';
// 		break;
// 	case 50:
// 		soliq = 'Sizning soliq miqdoringiz 5%';
// 		break;
// 	case 60:
// 		soliq = 'Sizning soliq miqdoringiz 6%';
// 		break;
// 	case 70:
// 		soliq = 'Sizning soliq miqdoringiz 7%';
// 		break;
// 	default:
// 		soliq = "Noto'g'ri miqdor kiritdingiz";
// }
// console.log(soliq);
//3
// let oy = 1;
// let fasil;
// switch (oy) {
// 	case 12:
// 	case 1:
// 	case 2:
// 		fasil = 'qish';
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		fasil = 'Bahor';
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		fasil = 'Yoz';
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		fasil = 'Kuz';
// 		break;
// 	default:
// 		fasil = "Noto'g'ri miqdor kiritdingiz";
// }
// console.log(fasil);
//4
// let mamlakatlar = 'Uzb';
// let poytaxt;
// switch (mamlakatlar) {
// 	case 'Uzb':
// 		poytaxt = 'Toshkent';
// 		break;
// 	case 'Use':
// 		poytaxt = 'Washington';
// 		break;
// 	case 'Yaponiya':
// 		poytaxt = 'Tokio';
// 		break;
// 	case 'Newyork':
// 		poytaxt = 'Parij';
// 		break;
// 	case 'Xitoy':
// 		poytaxt = 'Pekin';
// 		break;
// 	default:
// 		poytaxt = 'Bunday poytaxt mavjud emas';
// }
// console.log(poytaxt);
//5
// let kun = 1;
// let hafta;
// switch (kun) {
// 	case 1:
// 		hafta = 'Yakshanba';
// 		break;
// 	case 2:
// 		hafta = 'Dushanba';
// 		break;
// 	case 3:
// 		hafta = 'Seshanba';
// 		break;
// 	case 4:
// 		hafta = 'Chorshanba';
// 		break;
// 	case 5:
// 		hafta = 'Payshanba';
// 		break;
// 	case 6:
// 		hafta = 'Juma';
// 		break;
// 	case 7:
// 		hafta = 'Shanba';
// 		break;
// 	default:
// 		hafta = "Noto'g'ri kun";
// }
// console.log(hafta);
//6
// let fasil = 'Qish';
// let oylar;
// switch (fasil) {
// 	case 'Qish':
// 		oylar = ('Dekabr', 'Yanvar', 'Fevral');

// 		break;
// 	case 'Bahor':
// 		oylar = 'Mart';
// 		oylar = 'Aprel';
// 		oylar = 'May';
// 		break;
// 	case 'Yoz':
// 		oylar = 'Iyun';
// 		oylar = 'Iyul';
// 		oylar = 'Avgust';
// 		break;
// 	case 'Kuz':
// 		oylar = 'Sentyabr';
// 		oylar = 'Oktyabr';
// 		oylar = 'Noyabr';
// 		break;
// 	default:
// 		fasil = 'bunday fasil mavjud emas';
// }
// console.log(oylar);
//function
// 1;
// let a = function () {
// 	console.log('salom dunyo');
// };
// a();

// 2;
// let y = function () {
// 	let a = 3;
// 	console.log(a);
// };
// y();

// 3;
// let x = function () {
// 	let a = 3;
// 	let b = 5;
// 	console.log(a + b);
// };
// x();

// 4;
// let d = function (ism) {
// 	console.log(`salom ${ism}`);
// };
// d();

// 5;
// let h = function () {
// 	let a = 3;
// 	console.log((a = 2));
// };
// h();

// 6;
// let g = function () {
// 	let a = 3;
// 	let b = 5;
// 	console.log(a * b);
// };
// g();

// 9;
// let toUpperCase = function (str) {
// 	return str.toUpperCase();
// };
// let mystring = 'muhammadrizo';
// let upperCaseString = toUpperCase(mystring);
// console.log(upperCaseString);

10;
let b = function (num) {
	return String(num);
};

let num = 123323;
let string = b(num);
console.log(string);
console.log(typeof string);
