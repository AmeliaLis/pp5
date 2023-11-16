"use strict";
class Index {
    constructor() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = false;
    }
    getCustomerInfo() {
        // Implementacja funkcji getCustomerInfo
        return `${this.name} - ${this.nip}`;
    }
}
const customersList = [];
function showCustomer() {
    const ul = document.getElementById("customer-list");
    ul.innerHTML = '';
    customersList.forEach((customer) => {
        ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient('${customer.nip}');">${customer.getCustomerInfo()}</li>`;
    });
    showList();
}
function showForm() {
    const clientForm = document.getElementById("client-form");
    const clientList = document.getElementById("client-list");
    clientForm.style.display = "block";
    clientList.style.display = "none";
}
function showList() {
    const clientForm = document.getElementById("client-form");
    const clientList = document.getElementById("client-list");
    clientForm.style.display = "none";
    clientList.style.display = "block";
}
function save(event) {
    event.preventDefault();
    const newCustomer = new Customer();
    newCustomer.name = document.getElementById("company-name").value;
    newCustomer.nip = document.getElementById("nip").value;
    newCustomer.city = document.getElementById("city").value;
    newCustomer.street = document.getElementById("street").value;
    newCustomer.houseNumber = document.getElementById("house-number").value;
    newCustomer.zipCode = document.getElementById("zipcode").value;
    newCustomer.comments = document.getElementById("comments").value;
    newCustomer.industry = document.getElementById("industry").value;
    newCustomer.active = document.getElementById("active").checked;
    console.log(newCustomer);
    const foundCustomer = customersList.find((customer) => customer.nip === newCustomer.nip);
    if (foundCustomer) {
        customersList[customersList.indexOf(foundCustomer)] = newCustomer;
    }
    else {
        customersList.push(newCustomer);
    }
    console.log(customersList);
    showCustomer();
}
function loadClient(nip) {
    const newCustomer = customersList.find((customer) => customer.nip === nip) || new Customer();
    document.getElementById("company-name").value = newCustomer.name;
    document.getElementById("nip").value = newCustomer.nip;
    document.getElementById("city").value = newCustomer.city;
    document.getElementById("street").value = newCustomer.street;
    document.getElementById("house-number").value = newCustomer.houseNumber;
    document.getElementById("zipcode").value = newCustomer.zipCode;
    document.getElementById("comments").value = newCustomer.comments;
    document.getElementById("industry").value = newCustomer.industry;
    document.getElementById("active").checked = newCustomer.active;
}
