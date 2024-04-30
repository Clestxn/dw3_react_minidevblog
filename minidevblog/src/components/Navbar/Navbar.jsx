import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = userAuthentication();
    const navigate = useNavigate();
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/' className={styles.brand}>
                    MiniBlog <span>Dev</span>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to='/'
                        className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink to='/login'
                                className={({ isActive }) => (isActive ? styles.active : null)}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to='/register'
                                className={({ isActive }) => (isActive ? styles.active : null)}>Register</NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <NavLink to='/post/create'
                                className={({ isActive }) => (isActive ? styles.active : null)}>New Post</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard'
                                className={({ isActive }) => (isActive ? styles.active : null)}>Dashboard</NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to='/about'
                        className={({ isActive}) => (isActive ? styles.active : null)}>About</NavLink>
                    </li>
                    {user && (
                        <button className={sstyles.logout} onClick={logout}>Exit</button>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;