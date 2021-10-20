document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "コカ・コーラ", value: "cocacola", price: 200 },
    { name: "いろはす", value: "irohasu", price: 100 },
    { name: "おーいお茶", value: "oiocha", price: 150 },
  ];

  const selector = document.getElementById("drink");

  const createDrinkSelector = (products) => {
    for (const product of products) {
      const option = document.createElement("option");
      option.setAttribute("class", "menu__item");
      option.setAttribute("value", product.value);
      option.innerText = `${product.name} ${product.price}円`;
      selector.appendChild(option);
    }
  };
  createDrinkSelector(products);

  const confirm = document.getElementById("confirm");
  selector.addEventListener("change", () => {
    const product = products.find((v) => v.value === selector.value);
    confirm.innerHTML = `<span>${product.name}</span><span>${product.price}円</span>`;
  });

  const status = document.querySelectorAll("#status li");
  const videoPaths = [
    "/movie/step1.mp4",
    "/movie/step2.mp4",
    "/movie/step3.mp4",
  ];
  const videoBox = document.getElementById("videoBox");
  const video = document.getElementById("video");
  const statusAddClass = "jihanki-status__item--blue";
  let videoIdx = 0;

  video.addEventListener("ended", () => {
    videoIdx++;
    if (videoPaths.length > videoIdx) {
      video.setAttribute("src", videoPaths[videoIdx]);
      status[videoIdx].classList.add(statusAddClass);
    } else {
      status[videoIdx].classList.add(statusAddClass);
      videoBox.innerHTML = "<p>完成🍵</p>";
      videoIdx = 0;

      buybtn.disabled = "";
    }
  });
  const buyBtn = document.getElementById("buy");
  buyBtn.addEventListener("click", () => {
    const drink = document.getElementById("drink").value;
    if (!drink) {
      return;
    }
    video.setAttribute("src", videoPaths[videoIdx]);
    status[videoIdx].classList.add(statusAddClass);
    buybtn.disabled = true;
  });
});
