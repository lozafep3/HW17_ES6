class Client {
    constructor(id, firstName, lastName, address, phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    setData() {
        let data = JSON.stringify({
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            phone: this.phone
        });

        localStorage.setItem(this.id, data);

        console.log(`Data stored: client #${this.id} ${this.firstName} ${this.lastName}`);
    }

    getData() {
        let data = JSON.parse(localStorage.getItem(this.id));

        console.log(`${data.id} (${data.firstName} ${data.lastName}): ${data.address}, ${data.phone}`);
    }

    removeData() {
        localStorage.removeItem(this.id);

        console.log(`Data removed: ${this.id} ${this.firstName} ${this.lastName}`);
    }

}

class Card {
    constructor(number, expDate, CVV, clientID) {
        this.number = number;
        this.expDate = expDate;
        this.CVV = CVV;
        this.clientID = clientID;
    }

    setData() {
        let data = JSON.stringify({
            number: this.number,
            expDate: this.expDate,
            CVV: this.CVV,
            clientID: this.clientID,
        });

        localStorage.setItem(this.number, data);

        console.log(`Data stored: card #${this.number}`);
    }

    getData() {
        let data = JSON.parse(localStorage.getItem(this.number));

        console.log(`${data.number} (${data.CVV}, ${this.expDate}) owned by ${data.clientID}`);
    }

    removeData() {
        localStorage.removeItem(this.number);

        console.log(`Data removed: card #${this.number}`);
    }

}

class Payment {
    constructor(id, senderCard, receiverCard, amount, currency, date) {
        this.id = id;
        this.senderCard = senderCard;
        this.receiverCard = receiverCard;
        this.amount = amount;
        this.currency = currency;
        this.date = date;
    }

    setData() {
        let data = JSON.stringify({
            id: this.id,
            senderCard: this.senderCard,
            receiverCard: this.receiverCard,
            amount: this.amount,
            currency: this.currency,
            date: this.date,
        });

        localStorage.setItem(this.id, data);

        console.log(`Data stored: transaction #${this.id}`);
    }

    getData() {
        let data = JSON.parse(localStorage.getItem(this.id));

        console.log(`${data.id}: ${data.senderCard} => ${data.receiverCard}, ${data.amount}${data.currency}, ${data.date}`);
    }

    removeData() {
        localStorage.removeItem(this.id);

        console.log(`Data removed: transaction #${this.id}`);
    }

}