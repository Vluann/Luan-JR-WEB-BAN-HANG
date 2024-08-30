import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";
drawProduct();

const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");


const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click",function() {
    search();
});


inputSearch.addEventListener("keydown",function(e) {
 if(e.key == "Enter") {
    search();
 }
});

// filter
const filter = document.querySelector("#filter");
filter.addEventListener("change",function(e) {
switch (e.target.value) {
    case "mac-dinh":
        params.sort = "";
        params.order = "";
        break;

        case "gia-tu-thap-toi-cao":
            params.sort = "price";
            params.order = "asc";
            break;

            case "gia-tu-cao-toi-thap":
                params.sort = "price";
                params.order = "desc";
                break;

                case "giam-gia-nhieu":
                    params.sort = "discountPercentage";
                    params.order = "desc";
                    break;

    default:
        break;
}
drawProduct();
});
// end filter

// pagination
const paginationPrev = document.querySelector("#paginationPrev");
const paginationNumber = document.querySelector("#paginationNumber");
const paginationNext = document.querySelector("#paginationNext");


paginationPrev.addEventListener("click",function() {
   if(params.page > 1) {
    params.page = params.page - 1;
    paginationNumber.innerHTML = params.page;
    drawProduct();
   }
  });

paginationNext.addEventListener("click",function() {
  params.page = params.page + 1;
  paginationNumber.innerHTML = params.page;
  drawProduct();
});

// end pagination