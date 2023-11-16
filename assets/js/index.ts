class Index {
  name: string ="";
  nip: string ="";
  city: string="";
  street: string="";
  houseNumber: string="";
  zipCode: string="";
  comments: string="";
  industry: string="";
  active: boolean=false;

  getCustomerInfo(): string {
    // Implementacja funkcji getCustomerInfo
    return `${this.name} - ${this.nip}`;
  }
}

const customersList: Customer[] = [];

function showCustomer() {
  const ul = document.getElementById("customer-list") as HTMLUListElement;
  ul.innerHTML = '';
  customersList.forEach((customer) => {
    ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient('${customer.nip}');">${customer.getCustomerInfo()}</li>`;
  });
  showList();
}

function showForm() {
  const clientForm = document.getElementById("client-form") as HTMLElement;
  const clientList = document.getElementById("client-list") as HTMLElement;

  clientForm.style.display = "block";
  clientList.style.display = "none";
}

function showList() {
  const clientForm = document.getElementById("client-form") as HTMLElement;
  const clientList = document.getElementById("client-list") as HTMLElement;

  clientForm.style.display = "none";
  clientList.style.display = "block";
}

function save(event: Event) {
  event.preventDefault();
  const newCustomer = new Customer();
  newCustomer.name = (document.getElementById("company-name") as HTMLInputElement).value;
  newCustomer.nip = (document.getElementById("nip") as HTMLInputElement).value;
  newCustomer.city = (document.getElementById("city") as HTMLInputElement).value;
  newCustomer.street = (document.getElementById("street") as HTMLInputElement).value;
  newCustomer.houseNumber = (document.getElementById("house-number") as HTMLInputElement).value;
  newCustomer.zipCode = (document.getElementById("zipcode") as HTMLInputElement).value;
  newCustomer.comments = (document.getElementById("comments") as HTMLInputElement).value;
  newCustomer.industry = (document.getElementById("industry") as HTMLInputElement).value;
  newCustomer.active = (document.getElementById("active") as HTMLInputElement).checked;

  console.log(newCustomer);

  const foundCustomer = customersList.find((customer) => customer.nip === newCustomer.nip);

  if (foundCustomer) {
    customersList[customersList.indexOf(foundCustomer)] = newCustomer;
  } else {
    customersList.push(newCustomer);
  }

  console.log(customersList);
  showCustomer();
}

function loadClient(nip: string) {
  const newCustomer = customersList.find((customer) => customer.nip === nip) || new Customer();

  (document.getElementById("company-name") as HTMLInputElement).value = newCustomer.name;
  (document.getElementById("nip") as HTMLInputElement).value = newCustomer.nip;
  (document.getElementById("city") as HTMLInputElement).value = newCustomer.city;
  (document.getElementById("street") as HTMLInputElement).value = newCustomer.street;
  (document.getElementById("house-number") as HTMLInputElement).value = newCustomer.houseNumber;
  (document.getElementById("zipcode") as HTMLInputElement).value = newCustomer.zipCode;
  (document.getElementById("comments") as HTMLInputElement).value = newCustomer.comments;
  (document.getElementById("industry") as HTMLInputElement).value = newCustomer.industry;
  (document.getElementById("active") as HTMLInputElement).checked = newCustomer.active;
}
