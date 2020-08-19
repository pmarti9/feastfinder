export class Recipe {
    constructor(recipe) {
        this.recipe = recipe;
    }
    parse(){
        let name
        return {
            name,
            ingredients: [],
            cookTime: 0,
            cookTemp: { F: 0, C: 0},
            prepTime: 0,
            directions: '',
        }
    }
}