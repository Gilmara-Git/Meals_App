import  { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals : [] // in a real app we would store this is a server, so when the user closes and open the app the favorites is shown
};

const mealsReducer = (state = initialState, action)=>{
    return state;
}

export default mealsReducer;