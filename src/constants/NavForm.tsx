import * as React from 'react';
import { Button, FormControl, FormGroup, Navbar } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

function NavForm(props) {
    function handleSubmit() {
        props.history.push(`/teachers/${this.topic.value}/${this.name.value}`);
    }
    return (
        <Navbar.Form pullRight>
            <FormGroup>
                <FormControl type="text" placeholder="Name" inputRef={(input) => this.name = input}/>
            </FormGroup>
            {' '}
            <FormGroup>
                <FormControl type="text" placeholder="Topic" inputRef={(input) => this.topic = input}/>
            </FormGroup>
            {' '}
            <Button onClick={handleSubmit} bsStyle="primary">GO!</Button>
        </Navbar.Form>
    )
}

export default withRouter(NavForm);
