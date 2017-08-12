import React from 'react';
import PropTypes from 'prop-types';


class Ingredients extends React.Component {

    componentDidMount () {
        console.log(this.refs.title);
        console.log(this.refs.modal);
    }

    render () {

        const { title, ingredients } = this.props.recipe;

        // To remove space use title.replace(/\s/g, '') or title.replace(/ /g, '');
        const newTitle = title.replace(/\s/g, '');

        return (
            <div>
                <h4 className="text-center">Ingredients</h4><hr />
                <ul className="list-group">
                    {ingredients.length > 0 ?
                        ingredients.map((ingredient, id) => {
                            return (
                                <li key={id + 1} className="list-group-item">{ingredient}</li>
                            )
                        }) : null}
                </ul>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-default" data-toggle="modal" data-target={`#${newTitle}`} ref="title">
                    Edit
                </button>

                <div className="modal fade" id={newTitle} role="dialog" aria-labelledby="myModalLabel" ref="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Edit Recipe</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Recipe</label>
                                        <input type="text" className="form-control" id="recipe" placeholder="Recipe Name" value={title} onChange={this.handleTitle}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Ingredients</label>
                                        <textarea className="form-control" id="ingredients" rows="3" placeholder="Enter ingredients, Separated by commas" value={ingredients} onChange={this.handleIngredients}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.editRecipe}>Edit Recipe</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Ingredients.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Ingredients;