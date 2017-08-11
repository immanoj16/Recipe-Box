import React from 'react';
import PropTypes from 'prop-types';


class Ingredients extends React.Component {
    render () {
        const { ingredients } = this.props;
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
                <button className="btn btn-default">Edit</button>
            </div>
        )
    }
}

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
};

export default Ingredients;