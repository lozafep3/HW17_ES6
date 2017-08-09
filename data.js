//Clients Data: id, firstName, lastName, address, phone
let client000001 = new Client('000001', 'John', 'Curtis', 'Middleberge FL 32068', '(541) 754-3010');
let client000002 = new Client('000002', 'Karina', 'Barret', 'Palm Bay FL 32907', '(618) 623-7804');
let client000003 = new Client('000003', 'Helen', 'Flank', 'Dhahran 31311', '(457) 753-7195');
let client000004 = new Client('000004', 'Kenny', 'Gattis', '6762 33 Ave N', '(875) 530-6739');
let client000005 = new Client('000005', 'Yuto', 'Murase', 'Kanagawa 250 05', '(294) 750-7463');

client000001.setData();
client000002.setData();
client000003.setData();
client000004.setData();
client000005.setData();

//Cards Data: number, expDate, CVV, clientID
let card379304711171388 = new Card('379304711171388', '12.12.2018', '345', client000001.id);
let card341942305104318 = new Card('341942305104318', '17.03.2020', '832', client000001.id);
let card378714806719183 = new Card('378714806719183', '01.11.2017', '284', client000002.id);
let card375938197765900 = new Card('375938197765900', '29.01.2019', '173', client000003.id);
let card377376433884391 = new Card('377376433884391', '03.05.2021', '229', client000004.id);

card379304711171388.setData();
card341942305104318.setData();
card378714806719183.setData();
card375938197765900.setData();
card377376433884391.setData();

//Payment Data: id, senderCard, receiverCard, amount, currency, date

let payment2689021 = new Payment('2689021', card379304711171388.number, card375938197765900.number, '100', '$', '07.09.2017');
let payment2689022 = new Payment('2689022', card378714806719183.number, card375938197765900.number, '50', '$', '08.09.2017');
let payment2689023 = new Payment('2689023', card377376433884391.number, card375938197765900.number, '70', '$', '08.09.2017');
let payment2689024 = new Payment('2689024', card379304711171388.number, card375938197765900.number, '120', '$', '09.09.2017');
let payment2689025 = new Payment('2689025', card341942305104318.number, card375938197765900.number, '1200', '$', '09.09.2017');

payment2689021.setData();
payment2689022.setData();
payment2689023.setData();
payment2689024.setData();
payment2689025.setData();

//Testing:
client000001.getData();
//client000001.removeData();

card379304711171388.getData();
//card379304711171388.removeData();

payment2689021.getData();
//payment2689021.removeData();