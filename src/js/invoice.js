//data
const products = [
  {
    id: 1,
    name: "Domain",
    price: 13,
  },
  {
    id: 2,
    name: "Hosting",
    price: 60,
  },
  {
    id: 3,
    name: "Design Package",
    price: 200,
  },
  {
    id: 4,
    name: "Web Development",
    price: 500,
  },
];

//selector
const app = document.querySelector("#app");
const addRecord = app.querySelector("#addRecord");
const recordList = app.querySelector("#recordList");
const productSelect = app.querySelector('[name="product_id"]');
const costTotal = app.querySelector("#cost-total");

//function
const createOption = (content, value) => {
  const option = document.createElement("option");
  option.innerText = content;
  option.value = value;
  return option;
};
const createRecordRow = (id, productName, productPrice, quantity) => {
  const recordRow = document.createElement("tr");
  recordRow.className = "border-b border-neutral-200 group";
  recordRow.classList.add("record-row");
  recordRow.innerHTML = `
  <td class="p-3 "></td>
  <td class="p-3 ">${productName}</td>
  <td class="p-3 record-row-price text-end">${productPrice}</td>
  
  <td class="p-3 text-end ">
                <button class="record-row-decrement-q bg-gray-600 leading-3 p-1 opacity-0 group-hover:opacity-100 -translate-x-3 duration-300 group-hover:translate-x-0 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 stroke-white pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                  
                </button>
                <span class="record-row-q">${quantity}</span>
                <button class="record-row-increment-q  bg-gray-600 leading-3 p-1 opacity-0 group-hover:opacity-100 translate-x-3 duration-300 group-hover:translate-x-0 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 stroke-white pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  
                </button>
              </td>
  <td class="p-3 text-end relative">
  <span class='record-row-cost' >${productPrice * quantity}</span>
  <button class="record-row-del bg-neutral-500 opacity-0  group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-200 flex p-2 h-full top-0 justify-center items-center absolute aspect-square right-0 translate-x-[120%] group-hover:translate-x-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-white pointer-events-none">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
  </td>`;

  // const recordRowDel = recordRow.querySelector(".record-row-del")
  // recordRowDel.addEventListener("click",recordRowDelHandler)
  return recordRow;
};

const recordTotal = () => {
  // const recordRowCosts = document.querySelectorAll(".record-row-cost");
  // let total = 0;
  // /* The line `recordRowCosts.forEach((el) => (total += parseFloat(el.innerText)));` is calculating the
  // total cost of all the record rows in the table. */
  // recordRowCosts.forEach((el) => (total += parseFloat(el.innerText)));
  costTotal.innerText = [...app.querySelectorAll(".record-row-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};
//handler
const recordRowQuantityIncrement = (event) => {
  const currentRecordRow = event.target.closest(".record-row");
  const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
  const currentRecordRowCost =
    currentRecordRow.querySelector(".record-row-cost");
  const currentRecordRowPrice =
    currentRecordRow.querySelector(".record-row-price");
  currentRecordQuantity.innerText =
    parseInt(currentRecordQuantity.innerText) + 1;

  currentRecordRowCost.innerText =
    currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
    recordTotal();
    
};

const recordRowQuantityDecrement = (event) => {
  const currentRecordRow = event.target.closest(".record-row");
  const currentRecordQuantityDecrement =
    currentRecordRow.querySelector(".record-row-q");
  const currentRecordRowCostDecrement =
    currentRecordRow.querySelector(".record-row-cost");
  const currentRecordRowPriceDecrement =
    currentRecordRow.querySelector(".record-row-price");
  currentRecordQuantityDecrement.innerText =
    parseInt(currentRecordQuantityDecrement.innerText) - 1;

  currentRecordRowCostDecrement.innerText =
    currentRecordQuantityDecrement.innerText *
    currentRecordRowPriceDecrement.innerText;
    recordTotal();
};
const recordRowDelHandler = (event) => {
  const recordRow = event.target.closest(".record-row");
  if (confirm("Are u sure to delete?")) {
    recordRow.remove();
    recordTotal();
  }
};

const addRecordHandler = (event) => {
  event.preventDefault();
  //collect form Data
  const formData = new FormData(addRecord);
  //find product
  const { id, name, price } = products.find(
    (product) => product.id == formData.get("product_id")
  );
  recordList.append(createRecordRow(id, name, price, formData.get("quantity")));
  addRecord.reset();
  recordTotal();
  // console.log(formData.get("product_id"), formData.get("quantity"));
};

//render
products.forEach(({ name, id }) => {
  // productSelect.append(createOption(product.name, product.id));
  productSelect.append(new Option(name, id));
});
//listener
addRecord.addEventListener("submit", addRecordHandler);
recordList.addEventListener("click", (event) => {
  // console.log("u click");
  if (event.target.classList.contains("record-row-del")) {
    recordRowDelHandler(event);
  } else if (event.target.classList.contains("record-row-increment-q")) {
    recordRowQuantityIncrement(event);
  } else if (event.target.classList.contains("record-row-decrement-q"))
    recordRowQuantityDecrement(event);
});
