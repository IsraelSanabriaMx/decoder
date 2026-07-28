const tbody = document.querySelector("#data tbody");

document
  .getElementById("btnDecode")
  .addEventListener("click", decode);

document
  .getElementById("btnClean")
  .addEventListener("click", clean);

function decode() {
  tbody.innerHTML = "";

  const input = document
    .getElementById("input")
    .value;

  CONFIG.forEach(field => {
    const end = field.start + field.length;
    const value = input.substring(
      field.start,
      end
    );

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${field.key}</td>
      <td>${field.name}</td>
      <td>${field.length}</td>
      <td class="value">${field?.value || value}</td>
    `;

    tbody.appendChild(tr);
  });
}

function clean() {
  document.getElementById("input").value = "";
  tbody.innerHTML = "";
}