let foodContainer = document.getElementById("foodContainer");

async function getData() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let data = await res.json();
  console.log("data", data);
  displayData(data.categories);
}

getData();

function displayData(data) {
  data.map((food) => {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.setAttribute("id", "name");
    name.textContent = food.strCategory;
    let img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = food.strCategoryThumb;
    div.append(name, img);
    foodContainer.append(div);
  });
}