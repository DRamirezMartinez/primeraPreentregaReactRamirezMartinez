import LogoRojo from "./LogoRojo";


const PreFooter = () => {
    return (
     <div className="container-fluid bg-warning my-5">
        <div className="row">
            <div className="col py-3">
                <div className="container">
                <div className="row">
            <div className="col-md-1">
                <LogoRojo />
            </div>
            <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                    <div className="col mx-3">
                    <h2>Descárgate nuestra app</h2>
                    <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                    </div>
                    
                </div>                
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-light">Descarga ahora</a>
            </div>
            </div>
                </div>
            </div>
        </div>        
     </div>
    )
}

export default PreFooter;