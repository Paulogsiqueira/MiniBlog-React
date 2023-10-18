import { NavLink, Link } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'

import './Navbar.css'

const Navbar = () => {
    const { user } = useAuthValue();
    const {logout} = useAuthentication();


    return (
        <nav>
            <Link className="brand" to="/">
                Mini <span>Blog</span>
            </Link>
            <ul className="links_list">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login">
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create">
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about">
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout} type="button">Sair</button>
                    </li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar