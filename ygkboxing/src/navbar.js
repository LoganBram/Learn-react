import './App.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className = "nav">
            <Link to="/" className = "site-title">YGK Boxing</Link>
            <ul>
                <CustomLink to = "/home">HOME</CustomLink>
                <CustomLink to = "/about">ABOUT US</CustomLink>
                <CustomLink to = "/schedule">SCHEDULE</CustomLink>
                <CustomLink to = "/memberships">MEMBERSHIPS</CustomLink>
            </ul>
         </nav>

    )
}

function CustomLink({to,children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path:resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> 
            {children}
            </Link>
        </li>
    )
}