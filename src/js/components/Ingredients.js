import React from 'react';

class Ingredients extends React.Component {
    render () {
        return (
            <div>
                <h4 className="text-center">Ingredients</h4><hr />
                <ul className="list-group">
                    <li className="list-group-item">alu</li>
                    <li className="list-group-item">Bhata</li>
                    <li className="list-group-item">kadali</li>
                </ul>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-default">Edit</button>
            </div>
        )
    }
}

export default Ingredients;