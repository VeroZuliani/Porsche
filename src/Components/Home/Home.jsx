import { Nav } from '../Nav/Nav'
import './Home.css'

const Home = () =>{
    return(
        <section className="home"> 
            <Nav />

            <div className="col-5 ms-4">
                <h1 className='tit-hero'>El Viaje hacia la Perfección.</h1>
            </div>
            
            <div className="hero-final ms-4 me-4">
                <div className="container-hero-final" >
                    <div className="row">
                        <div className="col-8 d-flex align-items-end">
                            <p><a href="#" className="link-underline-light">Reserve una experiencia de conducción gratuita</a></p>
                        </div>
                        <div className="col">
                            <p className="tit-hero-final text-justify text-end">El máximo rendimiento requiere más que condiciones perfectas, especialmente suerte.</p>
                        </div>
                    </div>
                </div>
                
                <hr className="line mt-3"/>

                <div className="container-hero-final-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="d-flex">
                                <a className="nav-link pe-0 opacity-75" href="#">01/</a>
                                <a className="nav-link ps-0" href="#">página principal</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="text-hero-final-2 text-start m-0">Experimente el nuevo 911 GT3 RS en plena forma 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg>
                            con 
                            </p>
                            <p className="text-hero-final-2 text-start m-0">un mayor rendimiento en pista de carreras.</p>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <button type="button" className="btn btn-scroll text-uppercase ps-4 pe-4">desplazarse hacia abajo</button>
       
                            <a className="nav-link ps-0  d-flex align-items-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" fill="currentColor" className="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z"/>
                                </svg>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export {Home}
