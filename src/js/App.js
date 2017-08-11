import React from 'react';

import Collapsible from './components/Collapsible';
import Ingredients from './components/Ingredients';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {"title":"Pumpkin Pie","ingredients":["Pumpkin Puree","Sweetened Condensed Milk","Eggs","Pumpkin Pie Spice","Pie Crust"]},
                {"title":"Spaghetti","ingredients":["Noodles","Tomato Sauce","(Optional) Meatballs"]},
                {"title":"Onion Pie","ingredients":["Onion","Pie Crust","Sounds Yummy right?"]},
            ]
        }
    }

    render() {
        const { recipes } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="well">
                            <div className="panel-group">
                                {recipes.length > 0 ? recipes.map(recipe => {
                                    return (
                                        <Collapsible title={recipe.title}>
                                            <Ingredients ingredients={recipe.ingredients}/>
                                        </Collapsible>
                                    )
                                }) : null}
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary"  data-toggle="modal" data-target="#myModal">
                            Add Recipe
                        </button>


                        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="myModalLabel">Add a Recipe</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Recipe</label>
                                                <input type="text" className="form-control" id="recipe" placeholder="Recipe Name" />
                                            </div>
                                            <div className="form-group">
                                                <label>Ingredients</label>
                                                <textarea className="form-control" id="ingredients" rows="3" placeholder="Enter ingredients, Separated by commas" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Add Recipe</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
