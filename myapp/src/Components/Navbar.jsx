import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav class="nav-extended mynav">
                <div class="nav-wrapper">
                    <Link href="/" class="brand-logo">Biodeal Pharmacueticals</Link>
                    <Link href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link href="/">Get Payment</Link></li>
                        <li><Link href="/">Create Task</Link></li>
                        <li><Link href="/">Send Payment Reminder</Link></li>
                    </ul>
                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><Link class="active" href="/">Overview</Link></li>
                        <li class="tab"><Link href="#test2">Sales</Link></li>
                        <li class="tab"><Link href="#test3">Payments</Link></li>
                        <li class="tab"><Link href="#test4">Ledgers</Link></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><Link href="sass.html">Sass</Link></li>
                <li><Link href="badges.html">Components</Link></li>
                <li><Link href="collapsible.html">JavaScript</Link></li>
            </ul>

            
        </React.Fragment>
    )
}

export default (Navbar);