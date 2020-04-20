import React from 'react';
import {Editor} from '@atlaskit/editor-core';

function App() {
    return <Editor appearance="comment"
        onChange={(e)=>{
            console.log(JSON.stringify(e.state.toJSON()));
            debugger;
        }}
    />;
}

export default App;
