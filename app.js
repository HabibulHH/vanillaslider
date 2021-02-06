let ContainerNode = CreateRootNode();
ContainerNode.id = "scroll_div";

let leftNode = document.createElement("DIV");
let topNode = document.createElement("DIV");
let textNode = document.createElement("DIV");

textNode.appendChild(document.createTextNode("RECENTLY VIEWED"));
topNode.style.display = "flex";
topNode.style.justifyContent = "flex-end";
topNode.style.width = "40%";

let middleNode = document.createElement("DIV");
middleNode.style.display = "flex";

let rightleNode = document.createElement("DIV");
rightleNode.className = "js-carousel-next";

let button = CreateButton("&#8249");
leftNode.className = "js-carousel-prev";
leftNode.appendChild(button);

let nextButton = CreateButton("&#8250");

rightleNode.appendChild(nextButton);

ContainerNode.appendChild(textNode);
topNode.appendChild(leftNode);
topNode.appendChild(rightleNode);
ContainerNode.appendChild(topNode);
ContainerNode.appendChild(middleNode);

let carousel = document.createElement("div");
carousel.className = "js-product-carousel";
carousel.style.margin = "20px";
let carousel__view = document.createElement("div");

let carousel__control = {
  position: "absolute",
  zIndex: "1",
  height: "300px",
  width: "70px",
  backgroundColor: "rgba(221, 221, 221, 0.5)",
  transition: "background-color 0.3s",
  display: "table",
};
let carousel__control_next = {
  position: "absolute",
  zIndex: "1",
  height: "300px",
  width: "70px",
  backgroundColor: "rgba(221, 221, 221, 0.5)",
  transition: "background-color 0.3s",
  display: "table",
  right: "0",
};
let prevSpan = document.createElement("span");
prevSpan.className = "js-carousel-prev";
prevSpan.style.left = "0,";

Object.assign(prevSpan.style, { ...carousel__control });

let icon = document.createElement("i");
//icon.appendChild(document.createTextNode("previous"));
icon.style.display = "table-cell";
icon.style.verticalAlign = "middle";
icon.style.textAlign = "center";
prevSpan.appendChild(icon);

let nextSpan = document.createElement("span");
nextSpan.className = "js-carousel-next";
Object.assign(nextSpan.style, { ...carousel__control_next });
nextSpan.style.right = "0,";
let NextIcon = document.createElement("i");
//NextIcon.appendChild(document.createTextNode("next"));
NextIcon.style.display = "table-cell";
NextIcon.style.verticalAlign = "middle";
NextIcon.style.textAlign = "center";
prevSpan.appendChild(icon);

nextSpan.appendChild(NextIcon);

carousel__view.appendChild(prevSpan);
carousel__view.appendChild(nextSpan);
carousel__view.className = "carousel__view";
let viewStyle = {
  width: `calc((200px * 4) + 22px)`,
  height: "263px",
  background: "white",
  boxShadow: "0 1px 8px #888",
  margin: "auto",
  overflow: "hidde",
  position: "relative",
  overflow: "hidden",
};
Object.assign(carousel__view.style, { ...viewStyle });

carousel.appendChild(carousel__view);

let list = document.createElement("ul");
list.className = "js-product-list";
let product_list = {
  position: "absolute",
  margin: "0",
  padding: "0",
  transition: "transform 0.3s",
  transform: "translateX(0px)",
  listStyle: "none",
  height: "300px",
};
Object.assign(list.style, { ...product_list });

let ImageArray = [
  "https://source.unsplash.com/daily",
  "https://source.unsplash.com/user/erondu/daily",
  "https://source.unsplash.com/weekly?water",
  "https://source.unsplash.com/1600x900/?nature,water",
];

let imageDomList = [];

for (let index = 0; index < ImageArray.length; index++) {
  console.log(ImageArray[index]);
  imageDomList.push(createImage(ImageArray[index]));
}

for (let index = 0; index < imageDomList.length; index++) {
  let li = document.createElement("li");
  li.className = "product-list__item";

  let product_list__item = {
    width: "200px",
    height: "auto",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: "blue",
  };
  Object.assign(li.style, { ...product_list__item });

  let div = document.createElement("div");
  div.className = "product";
  let productStyle = {
    display: "table",
    height: "100%",
    width: "100%",
  };
  Object.assign(div.style, { ...productStyle });
  div.appendChild(imageDomList[index]);

  let span = document.createElement("span");
  span.appendChild(document.createTextNode("number"));
  let productSpanStyle = {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    color: "white",
    fontSize: "50px",
  };
  Object.assign(span.style, { ...productSpanStyle });

  div.appendChild(span);
  li.appendChild(div);
  list.appendChild(li);
}
carousel__view.appendChild(list);

middleNode.appendChild(carousel);
document.body.appendChild(ContainerNode);

var carousels = document.querySelectorAll(".js-product-carousel");

[].forEach.call(carousels, function (carousel) {
  carouselize(carousel);
});

function carouselize(carousel) {
  var productList = carousel.querySelector(".js-product-list");
  var productListWidth = 0;
  var productListSteps = 0;
  var products = carousel.querySelectorAll(".product");
  var productAmount = 0;
  var productAmountVisible = 4;
  var carouselPrev = carousel.querySelector(".js-carousel-prev");
  var carouselNext = carousel.querySelector(".js-carousel-next");

  //Count all the products
  [].forEach.call(products, function (product) {
    productAmount++;
    productListWidth += 250;
    productList.style.width = productListWidth + "px";
  });

  carouselNext.onclick = function () {
    if (productListSteps < productAmount - productAmountVisible) {
      productListSteps++;
      moveProductList();
    }
  };
  leftNode.addEventListener("click", function (e) {
    if (productListSteps > 0) {
      productListSteps--;
      moveProductList();
    }
  });
  rightleNode.addEventListener("click", function (e) {
    if (productListSteps < productAmount - productAmountVisible) {
      productListSteps++;
      moveProductList();
    }
  });
  carouselPrev.onclick = function () {
    if (productListSteps > 0) {
      productListSteps--;
      moveProductList();
    }
  };

  // This is a bit hacky, let me know if you find a better way to do this!
  // Move the carousels product-list
  function moveProductList() {
    productList.style.transform =
      "translateX(-" + 205 * productListSteps + "px)";
  }
}

function CreateRootNode() {
  let ContainerNode = document.createElement("DIV");
  ContainerNode.style.display = "flex";
  ContainerNode.style.justifyContent = "center";
  ContainerNode.style.padding = "15px";
  ContainerNode.style.flexDirection = "column";
  ContainerNode.style.alignItems = "center";
  ContainerNode.style.margin = "0 0 0 10px ";
  return ContainerNode;
}

function CreateButton(icon) {
  let button = document.createElement("button");
  button.innerHTML = icon;
  button.style.background = "gray";
  button.style.backgroundColor = "#f1f1f1";
  button.style.color = "black";
  button.style.borderRadius = "50%";
  button.style.width = "31px";
  return button;
}

function createImage(url) {
  let div = document.createElement("DIV");
  div.style.marginRight = "5px";
  let imageNode = document.createElement("IMG");
  imageNode.setAttribute("src", url);
  imageNode.setAttribute("max-width", "200");
  imageNode.setAttribute("height", "auto");
  imageNode.setAttribute("alt", "The Pulpit Rock");
  imageNode.style.backgroundRepeat = "no-repeat";
  imageNode.style.backgroundSize = "cover";
  imageNode.style.backgroundPosition = "center";
  imageNode.style.maxWidth = "200px";
  imageNode.style.height = "auto";

  div.appendChild(imageNode);

  return div;
}
