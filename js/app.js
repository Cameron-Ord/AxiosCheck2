let meal_container = document.querySelector(`#section_main`);





meal_container.insertAdjacentHTML(`beforeend`,

 `<article>
<span class="main_span">

<button class="clickme">USE API</button>
<button class="otherbutton">USE API2</button>
</span>
</article>`



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
    <span class="main_span">
    
    <h3>${response[`data`][`meals`][counter][`strMeal`]}</h3>
    
    <h6>${response[`data`][`meals`][counter][`strArea`]}</h6>
    
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

