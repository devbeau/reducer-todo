import React from 'react';
import {Nav, Navbar as Navibar, NavItem, ButtonGroup , Button} from 'reactstrap';
import '../../node_modules/bootswatch/dist/yeti/bootstrap.min.css';

export default function Navbar (props) {


    return (
        <Nav>
            <Navibar>
                <ButtonGroup>
                    <NavItem>
                        <Button>Home</Button>
                    </NavItem>
                    <NavItem>
                        <Button>TODO</Button>
                    </NavItem>
                </ButtonGroup>
            </Navibar>
        </Nav>
    )
}