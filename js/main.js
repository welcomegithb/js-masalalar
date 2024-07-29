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

// 10;
// let b = function (num) {
// 	return String(num);
// };

// let num = 123323;
// let string = b(num);
// console.log(string);
// console.log(typeof string);

// let x = function (a, b) {
// 	console.log(a * b);
// };
// x(2, 5);
// Math masalar
// 1
// console.log(Math.floor(7.9));
// 2
// console.log(Math.ceil(8.1));
// 3
// console.log(Math.round(4.9));
// 4
// let x = 12;
// console.log(Math.abs(x));
// 5
// console.log(Math.sqrt(22));
// 6
// console.log(Math.pow(7, 2));
// 7
// let randomValue = Math.random();
// console.log(randomValue);
// 8
// let random = Math.round(Math.random() * 10);
// console.log(random);
// 9
// console.log(Math.PI);
// 10
// let a = 6;
// let b = 8;
// console.log((a + b) / 2);
// 11
// let t = 4;
// let y = 8;
// console.log(Math.max(t * y));
// 12
// let t = 4;
// let y = 8;
// console.log(Math.max(t / y));
// dom mavzusi masala
// 1. Elementdagi Matnni Olish
// Sharti: Berilgan elementning idsi bo'yicha elementni toping va uning matnini konsolga chiqaring.
// const eltitle = document.querySelector('#title');
// console.log(eltitle.textContent);
// 2. Elementdagi HTMLni Olish
// Sharti: Berilgan elementning idsi bo'yicha elementni toping va uning ichidagi HTML kodini konsolga chiqaring.
// const eltitle = document.querySelector('#title');
// console.log(eltitle);
// 3. Matnni Yangilash
// Sharti: Berilgan elementning matnini yangilang.
// const eltitle = document.querySelector('#title');
// eltitle.textContent = 'React kirish';
// 4. HTMLni Yangilash
// Sharti: Berilgan elementning ichidagi HTML kodini yangilang.
// 5. Matnni Qo'shish
// Sharti: Berilgan elementga matn qo'shing, lekin mavjud matnni o'zgartirmang.
// const eltitle = document.querySelector('#title');
// eltitle.textContent += ' + React kirish';
// 7. Matnni O'chirish
// Sharti: Berilgan elementning barcha matnini o'chiring.
// const eltitle = document.querySelector('#title');
// eltitle.textContent = '';
// 8. HTMLni O'chirish
// Sharti: Berilgan elementning ichidagi barcha HTML kodini o'chiring.
// setattribute va getattribute uchun masalalar:
// const eltitle = document.querySelector('#title');
// eltitle.innerHTML = '';
// 1. ID Atributini yarating
// Sharti: Elementga yangi id atributini  qo'shing.
// const eltitle = document.querySelector('#title');
// console.log(eltitle.getAttribute('id'));
// const newid = eltitle.setAttribute('id', 'TITLE');
// console.log(newid);
// masala js va css style
// 1. Tugmani bosganda matn rangini o'zgartirish
// Shart:
// Tugma bosilganda <p> elementining matn rangini qizilga o'zgartiring.
// const elTitle = document.querySelector('.title');
// const elBTN = document.querySelector('.btn');
// elBTN.addEventListener('click', () => {
//   elTitle.style.color = 'red';
// });
// 2. Boshqa elementni bosganda biror elementning ko'rinishini o'zgartirish
// Shart:
// Tugmani bosganda <div> elementining kengligini va balandligini o'zgartiring.
// const elText = document.querySelector('.text');
// const elBTN = document.querySelector('.btn');
// elBTN.addEventListener('click', () => {
//   elText.style.width = '320px';
//   elText.style.height = '320px';
// });
// 3.Matnni kattalashtirish
// Shart:
// Tugmani bosganda <p> elementining shrift o'lchamini kattalashtiring.
// const elBTN = document.getElementById('btn');
// const elText = document.querySelector('#text');

// elBTN.addEventListener('click', () => {
//   elText.style.fontSize = '50px';
// });
// const elTitle = document.querySelector('#title');
// const elBtn = document.querySelector('#btn');
// elBtn.addEventListener('click', () => {
//   elTitle.classList.toggle('hidden');
// });
// 5.Orqa fon rasmni o'zgartirish
// Shart:
// Tugmani bosganda elementning orqa fon rasmni o'zgartiring.
// const elTitle = document.querySelector('#title');
// const elBtn = document.querySelector('#btn');
// elBtn.addEventListener('click', () => {
//   elTitle.style.backgroundImage = 'url(../img/images.png)';
// });

// 6.Border radiusni o'zgartirish
// Shart:
// Tugmani bosganda <div> elementining border radiusini o'zgartiring.
// const eldiv = document.querySelector('#mydiv');
// const elBtn = document.querySelector('.btn');
// elBtn.addEventListener('click', () => {
// 	eldiv.style.borderRadius = '50px';
// });
// 11.Marginni o'zgartirish
// Shart:
// Tugmani bosganda <div> elementining yuqori margini 50px ga oshiring.
// const eldiv = document.querySelector('#mydiv');
// const elBtn = document.querySelector('.btn');
// elBtn.addEventListener('click', () => {
// 	eldiv.style.margin += '50px';
// });
// 12.Paddingni o'zgartirish
// Shart:
// Tugmani bosganda <div> elementining ichki masofasini (padding) 20px ga oshiring.
// const eldiv = document.querySelector('#mydiv');
// const elBtn = document.querySelector('.btn');
// elBtn.addEventListener('click', () => {
// 	eldiv.style.padding += '20px';
// });
// 13.Maxsus CSS class qo'shish
// Shart:
// Tugmani bosganda <div> elementiga maxsus CSS klassni qo'shing.
// const elBtn = document.querySelector('.btn');
// const eldiv = document.querySelector('#mydiv');
// elBtn.addEventListener('click', () => {
// 	eldiv.classList.toggle('mydiv2');
// });
// js&child va parent masalalari
// 1. Parent Elementni Topish
// Shart: Berilgan elementning parent elementini toping.
// const elchild = document.querySelector('.child');
// const parent = elchild.parentElement;
// console.log(parent);
// 2. Children Elementlarni Topish
// Shart: Berilgan elementning barcha children elementlarini toping.
// const elparent = document.querySelector('.parent');
// const allchild = elparent.children;
// console.log(allchild);
// 3. Keyingi Sibling Elementni Topish
// Shart: Berilgan elementning keyingi sibling elementini toping.
const elitemchild = document.querySelector('.itemchildd');
const SiblingElement = elitemchild.nextElementSibling;
console.log(SiblingElement);
// 4.Oldingi Sibling Elementni Topish
// Shart: Berilgan elementning oldingi sibling elementini toping.
const elitemchildd = document.querySelector('.itemchild');
const SiblingElementd = elitemchild.nextElementSibling;
console.log(SiblingElementd);
// 5.Parent Elementiga Class Qo'shish
// Shart: Berilgan elementning parent elementiga yangi class qo'shing.
// 6.Children Elementlariga Class Qo'shish
// Shart: Berilgan elementning barcha children elementlariga yangi class qo'shing.
// 7.Parent Elementni O'chirish
// Shart: Berilgan elementning parent elementini o'chirib tashlang.
// 8. Children Elementlarni O'chirish
// Shart: Berilgan elementning barcha children elementlarini o'chirib tashlang.
// 9.Keyingi Sibling Elementni O'chirish
// Shart: Berilgan elementning keyingi sibling elementini o'chirib tashlang.
// 10.Oldingi Sibling Elementni O'chirish
// Shart: Berilgan elementning oldingi sibling elementini o'chirib tashlang.
// 11. Parent Elementga Text Qo'shish
// Shart: Berilgan elementning parent elementiga matn qo'shing.
// 12.Children Elementlarga Text Qo'shish
// Shart: Berilgan elementning barcha children elementlariga matn qo'shing.
// 13.Sibling Elementlarga Text Qo'shish
// Shart: Berilgan elementning barcha sibling elementlariga matn qo'shing.
// 14.Parent Elementni Style O'zgartirish
// Shart: Berilgan elementning parent elementining CSS style ni o'zgartiring.
// 15.Children Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha children elementlarining CSS style ni o'zgartiring.
// 16.Sibling Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha sibling elementlarining CSS style ni o'zgartiring.
// 17.Sibling Elementlarga Attribute Qo'shish
// Shart: Berilgan elementning barcha sibling elementlariga yangi attribute qo'shing.
// 18. Parent Elementdan Attribute O'chirish
// Shart: Berilgan elementning parent elementidan attribute ni o'chiring.
// 19.Sibling Elementlardan Attribute O'chirish
// Shart: Berilgan elementning barcha sibling elementlaridan attribute ni o'chiring.
// 20.Children Elementlarning Style ni O'zgartirish
// Shart: Berilgan elementning barcha children elementlarining CSS style ni o'zgartiring.
