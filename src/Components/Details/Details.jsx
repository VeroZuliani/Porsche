import "./Details.css"

const Details = () =>{
    return(

        <section className="Details mt-5 border">
            <div className="row m-0">
                <div className="col">
                    <button type="button" className="btn btn-update text-uppercase ps-4 pe-4">updates</button>
                </div>
                <div className="col">
                    <div className="d-flex">
                        <a className="nav-link-detalle pe-0 opacity-75" href="#">02/</a>
                        <a className="nav-link-detalle ps-0" href="#">detalles</a>
                    </div>
                </div>
            </div>

            <div className="row m-0 mb-5 border border-danger">
                <div className="col mt-5 border border-black">
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae reprehenderit architecto</h1>
                    <p className="mt-5">Lorem ipsum, dolor sit amet</p>
                    <hr className="line-detalle mt-3 mb-5"/>

                    <div className="row border border-black">
                        <div className="col border border-primary">
                            <img className="border border-danger" width="100px" height="100px" src="..." alt="" />
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae facilis amet voluptatibus provident, nostrum voluptatem!.</p>
                        </div>
                        <div className="col border border-primary">
                            <img className="border border-danger" width="100px" height="100px" src="..." alt="" />
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae facilis amet voluptatibus provident, nostrum voluptatem!.</p>
                        </div>
                    </div>
                
                </div>
                <div className="col border border-primary">
                    <p>image</p>
                </div>
            </div>

        </section>
        

    )
}

export {Details}