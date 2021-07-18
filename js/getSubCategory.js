//================================================================
import data2 from './storeData2.js';

let $asideCategoryList = document.querySelector('[data-aside-wrapper]');

let clickedMainCategoryObj = null;
let clickedSubCategoryObj = null;

$asideCategoryList.addEventListener('click', function (event) {
    getSelectedCategoryObj(event)
});


let getSelectedCategoryObj = function (event) {

    for (let key in data2) {
        if (key === event.target.innerText) {
            clickedMainCategoryObj = data2[key]
            console.log(clickedMainCategoryObj)
        }
    }

    if (clickedMainCategoryObj) {
        for (let key in clickedMainCategoryObj) {
            if (key === event.target.innerText) {
                clickedSubCategoryObj = clickedMainCategoryObj[key]
                console.log(clickedSubCategoryObj)
            }
        }
    }
}
