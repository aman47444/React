import React from 'react'
import './style.scss';
const Drawer = props => {
    let drawerClasses = ['drawer-side'];
    if(props.show) {
        drawerClasses = 'drawer-side open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="#">section a</a></li>
                <li><a href="#">section a</a></li>
                <li><a href="#">section a</a></li>
            </ul>
        </nav>
    )
}
export default Drawer;