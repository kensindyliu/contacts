
'user strict'

function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

function select(selector){
    return document.querySelector(selector);
}

function create(element){
    return document.createElement(element);
}

const btnAdd = select('#btnAdd');
const dvContacts = select('.contacts');
const iptInfo = select('#info');
const dvTips = select('#dvTips');
const amountMsg = select('#amountMsg')
let contacts = [];
iptInfo.value = '';
onEvent('click', btnAdd, addContact)

function addContact(){
    let details = iptInfo.value.split(',');
    if(details.length < 3 ){
        dvTips.innerHTML = 'Please input the name, the city, the email and then add contact';
    } else {
        if(contacts.length < 8){
            dvTips.innerHTML = '';
            const contact = new Contact(iptInfo.value);
            const dvContact = create('div');
            dvContact.classList.add('contact');
            dvContact.innerHTML = `Name: ${contact.name} <br>City: ${contact.city} <br>Email: ${contact.email}`;

            dvContacts.appendChild(dvContact);
            contacts.push(contact);
            amountMsg.innerHTML = 'Saved contact(s): ' + contacts.length;
            iptInfo.value = '';
        } else {
            dvTips.innerHTML = 'Storage is full!';
        }
        
    }
}


class Contact {
    constructor(contactInfo){
        let details = contactInfo.split(',');
        console.log(details.length);
        if(details.length >= 3){
            this._name = details[0];
            this._city = details[1];
            this._email = details[2];
        } else {
            return null;
        }
    }

    get name(){
        return this._name;
    }

    get city(){
        return this._city;
    }

    get email(){
        return this._email;
    }
}