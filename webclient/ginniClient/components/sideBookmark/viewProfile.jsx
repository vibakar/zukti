import React from 'react';
import { Rail, Segment, Menu, Icon} from 'semantic-ui-react';
import MenuExampleSecondary from './menuExample.jsx';
import Tabular from './tab.jsx';

export default class ViewProfile extends React.Component {
    render() {
        return (
      <Rail dividing close size = 'large'>
        <Segment>
          <MenuExampleSecondary />
          <Tabular />
       </Segment>
      </Rail>
        );
    }
}
