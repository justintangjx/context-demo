import React from "react";

import { ColorContext } from "./ColorContext";

const Component3 = () => (
  <div>
    
    <ColorContext.Consumer>
    {value => <h2> Color ON {value}</h2> }
    </ColorContext.Consumer>

  </div>
);

export default Component3;
