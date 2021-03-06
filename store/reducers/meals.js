import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';


export const initialState ={
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals : []
}

const mealsReducer = (state = initialState, action )=>{
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal=> meal.id === action.mealId);
            // console.log(existingIndex, 'isFav')
            if(existingIndex >=0){
                const updatedFavMeals =  [ ...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);  
                // console.log(updatedFavMeals, 'UPfav')             
                return { ...state, favoriteMeals:updatedFavMeals }

            }else{
                // console.log(state.favoriteMeals,'fav')
                const meal = state.meals.find(meal=> meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
            
            
        case SET_FILTERS:
               const appliedFilters = action.filters;
                const updatedFavoriteMeals = state.meals.filter(meal=>{
                    if(appliedFilters.glutenFree && !meal.isGlutenFree){
                        return false;
                    }
                    if(appliedFilters.vegan && !meal.isVegan){
                        return false;
                    }
                    if(appliedFilters.vegetarian && !meal.isVegetarian){
                        return false;
                    }
                    if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                        return false;
                    }

                    return true;
                });
                
                return { ...state,filteredMeals: updatedFavoriteMeals  }

            default:
            return state;
    }

    
};

export default mealsReducer;