import "./Details.css"

const Details = () =>{
    return(

        <section className="Details mt-5">
            <div className="row m-0">
                <div className="col">
                    <button type="button" className="btn btn-update text-uppercase ps-4 pe-4">actualizaciones</button>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end me-3">
                        <a className="nav-link-detalle pe-0 opacity-75" href="#">02/</a>
                        <a className="nav-link-detalle ps-0" href="#">detalles</a>
                    </div>
                </div>
            </div>

            <div className="row m-0 mt-3 mb-5">
                <div className="col">
                    <h1 className="tit-detalle pb-5">Porque el mayor desafío es seguir siendo imbatible.</h1>
                    <p className="mt-5 fw-medium">Descubra el 911 GT3 RS en detalle.</p>
                    <hr className="line-detalle mt-3 mb-5"/>

                    <div className="row">
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind mb-3" viewBox="0 0 16 16">
                                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <h2 className="subtit-detalle mb-3">Fuerza aerodinámica</h2>
                            <p>El nuevo 911 GT3 RS está preparado para rendimiento -
                                gracias al aumento de la carga aerodinámica y a la aerodinámica revisada por Porsche Active Aerodynamics.</p>
                        </div>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-car-front mb-3" viewBox="0 0 16 16">
                                <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276"/>
                                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z"/>
                            </svg>
                            <h2 className="subtit-detalle mb-3">Confortable</h2>
                            <p>El nuevo 911 GT3 RS se mantiene fiel a esta filosofía automovilística - 
                                a pesar del equipamiento significativamente ampliado y mejorado.</p>
                        </div>
                    </div>
                
                </div>
                <div className="col ms-5 me-3 p-0">
                    <img className="img-detalle img-fluid" src="piloto.png" alt="" />
                    
                    <div className="testimonio">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote mt-2 ms-2" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                        </svg>
                        <p className="test m-3">Con su multitud de características de diseño deportivo y detalles técnicos - el 911 GT3 RS se adapta perfectamente a sus modelos motorizados.</p>
                        <p className="nom-test m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg> 
                            Oliver Blume
                        </p>
                    </div>
                </div>
            </div>

        </section>
        

    )
}

export {Details}