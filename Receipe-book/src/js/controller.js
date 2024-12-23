import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const renderSpinner = function (parentEl) {
  const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;

  parentEl.innerHTML='';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

const showRecipe = async function () {
  try {
    const hashVal= window.location.hash.slice(1);
    if (!hashVal) return;
    renderSpinner(recipeContainer);
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/`+hashVal);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }

    const markup = `
    <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map((ing) => {
      return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>`;
    }).join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}/span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
}

const search__btn= document.querySelector('.search__btn');

search__btn.addEventListener('click',async (event)=>{
  try{
  event.preventDefault();
  const input1 = document.querySelector('.search__field');
  const val1= input1.value;
  const res= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${val1}`);
  const data = await res.json();

  const {recipes}= data.data;

  // const markup= 
  // `${recipes.map((recipe)=>{
  //   return `
  //         <li class="preview">
  //           <a class="preview__link preview__link--active"  href="#${recipe.id}" >
  //             <figure class="preview__fig">
  //               <img src="${recipe.image_url}" alt="${recipe.title}" />
  //             </figure>
  //             <div class="preview__data">
  //               <h4 class="preview__title">${recipe.title}</h4>
  //               <p class="preview__publisher">${recipe.publisher}</p>
  //               <div class="preview__user-generated">
  //                 <svg>
  //                   <use href="${icons}#icon-user"></use>
  //                 </svg>
  //               </div>
  //             </div>
  //           </a>
  //         </li>
  //   `;
  // }).join('')}`;

  const markup= recipes.map((recipe)=>{
    return `
          <li class="preview">
            <a class="preview__link preview__link--active"  href="#${recipe.id}" >
              <figure class="preview__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }).join('');

  const el= document.querySelector('.results');

  el.innerHTML='';
  el.insertAdjacentHTML('afterbegin', markup);

  }catch(err){
    console.log(err);
  }
});

['hashchange', 'load'].forEach(ev=> window.addEventListener(ev, showRecipe));
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);


// a09eb4ab-4668-495f-a5ed-5b358fb03732

