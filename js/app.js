let meal_container = document.querySelector(`#section_main`);





meal_container.insertAdjacentHTML(`beforeend`,

 `    
 <article>
<span class="main_span">

<button class="clickme">USE API</button>
<button class="otherbutton">USE API2</button>
</span>
</article>


<section id="hero_section">

<input type="value" id="meal_input">
<span id="meal_filter">
<span>

</section>
`



);


function failureFunction(){
    let meal_container = document.querySelector(`#section_main`);

    meal_container.insertAdjacentHTML(`beforeend`, `
    
    
    <article>
<span class="main_span">

<h3>Sorry</h3>
    
</span>
</article>
    `);
    
};






function successFunction(response){
let meal_container = document.querySelector(`#section_main`);


for(let counter = 0; counter < response[`data`][`meals`].length; counter = counter +1){

    meal_container.insertAdjacentHTML(`beforeend`, 


    `<article>
    <span class="main_span_2">
    
    <h3>${response[`data`][`meals`][counter][`strMeal`]}</h3>
    
    <h6>${response[`data`][`meals`][counter][`strArea`]}</h6>

    <img src="${response[`data`][`meals`][counter][`strMealThumb`]}" width="150px" height="150px">
    
    <p>${response[`data`][`meals`][counter][`strInstructions`]}</p>


    
    
    </span>
    </article>`);
    

}



};







function API(){



    axios.request({

        url: `https://www.themealdb.com/api/json/v1/1/random.php`
    }).then(successFunction).catch(failureFunction);




};



let call_api = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < call_api.length; counter = counter + 1) {


    call_api[counter].addEventListener(`click`, API);
};




function filter_meal_sucess(response){
    let meal_filter = document.querySelector(`#meal_filter`);
    for(let counter = 0; counter < response[`data`][`meals`].length; counter = counter +1){

        meal_filter.insertAdjacentHTML(`beforeend`, `
        
        <h3>${response[`data`][`meals`][counter][`strMeal`]}</h3>

        <img src="${response[`data`][`meals`][counter][`strMealThumb`]}">

`);

    };



};

function filter_meal_error(){


    let meal_filter = document.querySelector(`#meal_filter`);

    meal_filter.insertAdjacentHTML(`beforeend`, `<p>failure</p>`);

}


function filter_meal_click(details) {

let filter_input = document.querySelector(`#meal_input`);
let filter_input_value = filter_input[`value`];
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php`,

    params:{
        c: filter_input_value
    }
}).then(filter_meal_sucess).catch(filter_meal_error)
};


let meal_button = document.querySelectorAll(`.otherbutton`);

for (let counter = 0; counter < meal_button.length; counter = counter + 1) {


    meal_button[counter].addEventListener(`click`, filter_meal_click);
};
