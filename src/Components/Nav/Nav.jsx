import "./Nav.css"

const Nav = () =>{
    return(

        <section className="Nav">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Detalles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Especificaciones</a>
                            </li>
                            <li className="nav-item">
                                <div className="row">
                                    <div className="col pe-0">
                                        <a className="nav-link pe-0" href="#">Galería</a>
                                    </div>
                                    <div className="col ps-0">
                                        <a className="nav-link ps-0 pe-0 opacity-75" href="#">(12)</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <a className="navbar-brand tit-logo" href="#">PORSCHE</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li> 
                        </ul>
                        <button type="button" className="btn btn-personalizar me-3 p-2 ps-4 pe-4">Personalizar</button>
                    </div>
                </div>   
            </nav>
            <hr className="line ms-4 me-4 mt-0"/>
        </section>

    )
}

export {Nav}