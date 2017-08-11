import React from 'react';

import Collapsible from './components/Collapsible';
import Ingredients from './components/Ingredients';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="well">
                            <div className="panel-group">
                                <Collapsible title="Overview">
                                    <Ingredients/>
                                </Collapsible>
                                <Collapsible title="Features">
                                    <Ingredients/>
                                </Collapsible>
                                <Collapsible title="Software">
                                    <Ingredients/>
                                </Collapsible>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary">Add Recipe</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
