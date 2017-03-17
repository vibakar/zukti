import React from 'react';
import {Form , Input} from 'semantic-ui-react';
import Cookie from 'react-cookie';

class IndexComponent extends React.Component {
  constructor() {
     super();
 }
 render() {
     console.log('domain: ' + Cookie.load('domain'));
     console.log('email: ' + Cookie.load('email'));
    let domain = Cookie.load('domain');
    let email = Cookie.load('email');
    domain = domain.toLowerCase();
     domain = domain.replace(' ', '_');
    let act = `/uploadcsv?domain=${domain}&email=${email}`
       return (
           <div>
               <Form method="post" encType="multipart/form-data" action={act} >
                   <input type="file" name="uploadedFile"  accept=".csv" />
                    <Input type='submit' name='submit' value='Upload CSV file' />
               </Form>
           </div>
       );
   }
}
export default IndexComponent;
