//business logic for AdrressBook
function AdressBook() {
  this.contacts = []
  this.currentId = 0
}

AdressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}
AdressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
AdressBook.prototype.findContact = function(id) {
  for (var i = 0; i< this.contacts.length; i++) {
    if (this.contacts[i].id === id) {
      return this.contacts[i];
    }
  };
  return false;
}
AdressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i].id === id) {
      delete this.contacts[i];
      return true;
    }
  };
  return false;
}

//busness logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var addressBook = new AdressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);
