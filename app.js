let list =
  JSON.parse(
    localStorage.getItem("expenses")
  ) || [];

let amt =
  Number(
    localStorage.getItem("total")
  ) || 0;

const totalDisplay =
  document.querySelector(".total");

const table =
  document.querySelector("table");

const submit =
  document.querySelector(".submit");

totalDisplay.innerHTML = amt;

// Function to render expense
function renderExpense(name, amount) {
  const row =
    document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${amount}</td>
    <td>
      <button class="delete">
        Delete
      </button>
    </td>
  `;

  table.appendChild(row);

  const deletebtn =
    row.querySelector(".delete");

  deletebtn.addEventListener(
    "click",
    () => {
      amt -= Number(amount);

      totalDisplay.innerHTML =
        amt;

      list = list.filter(
        item =>
          !(
            item.n === name &&
            item.a == amount
          )
      );

      localStorage.setItem(
        "expenses",
        JSON.stringify(list)
      );

      localStorage.setItem(
        "total",
        amt
      );

      row.remove();
    }
  );
}

// Load saved expenses
list.forEach(item => {
  renderExpense(
    item.n,
    item.a
  );
});

// Add new expense
submit.addEventListener(
  "click",
  () => {
    const name =
      document.querySelector(
        ".name"
      ).value;

    const amount =
      document.querySelector(
        ".amount"
      ).value;

    if (
      name.trim() === "" ||
      amount === ""
    ) {
      alert(
        "Please enter expense name and amount"
      );
      return;
    }

    list.push({
      n: name,
      a: amount
    });

    amt += Number(amount);

    totalDisplay.innerHTML =
      amt;

    localStorage.setItem(
      "expenses",
      JSON.stringify(list)
    );

    localStorage.setItem(
      "total",
      amt
    );

    renderExpense(
      name,
      amount
    );

    document.querySelector(
      ".name"
    ).value = "";

    document.querySelector(
      ".amount"
    ).value = "";
  }
);