import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./contant.js";
import { params } from "./variable.js";

const product = document.querySelector("#product");

export const drawProduct = () => {
    console.log(params);

    let category =  "";
    if(params.category != "") {
        category = `&category=${params.category}`;
    }

    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;

    fetchApi(api)
    .then(data => {
    let htmls = data.map(item => {
        return `
        <div class="product_item">
            <div class="image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h3>${item.discountPercentage}</h3>
            </div>

            <h3>${item.title}</h3>

            <div class="content">
                <div class="meta">
                    <div class="iner-left">
                        <h3>${item.price}</h3>
                    </div>

                    <div class="iner-right">
                        <h3>${item.stock}</h3>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    product.innerHTML = htmls.join("");

})
}