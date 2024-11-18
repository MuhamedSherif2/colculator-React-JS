import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div>
                <h2>CODE HUB</h2>

                <ul>
                    <li>
                        <Link to="">Courses</Link>
                    </li>
                    <li>
                        <Link to="">Account</Link>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Nav
