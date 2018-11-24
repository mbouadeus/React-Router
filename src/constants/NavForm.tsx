import * as React from 'react';
import { Button, FormControl, FormGroup, Navbar } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

function NavForm(props) {
    let name:any;
    let topic:any;

    function handleSubmit() {
        props.history.push(`/teachers/${topic.value}/${name.value}`);
    }

    return (
        <Navbar.Form pullRight>
            <FormGroup>
                <FormControl type="text" placeholder="Name" inputRef={(input) => name = input}/>
            </FormGroup>
            {' '}
            <FormGroup>
                <FormControl type="text" placeholder="Topic" inputRef={(input) => topic = input}/>
            </FormGroup>
            {' '}
            <Button onClick={handleSubmit} bsStyle="primary">GO!</Button>
        </Navbar.Form>
    )
}

export default withRouter(NavForm);