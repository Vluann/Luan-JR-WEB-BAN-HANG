import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./contant.js";
import { params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";

const category = document.querySelector("#category");

fetchApi(API_CATEGORY)
.then(data => {
    let htmls = data.map(item => {
        return `
        <div class="category_item" data-category="${item}">
            ${item}
        </div>
        `;
    });

    category.innerHTML = htmls.join("");

    const listcategory = document.querySelectorAll("#category .category_item");
    listcategory.forEach(item => {
    item.addEventListener("click",function() {
        params.category = item.getAttribute("data-category");
        // console.log(params);
        drawProduct();
    });

    })
});