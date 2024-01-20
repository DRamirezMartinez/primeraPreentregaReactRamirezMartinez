import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div class="card">
                        <img src={card1} class="card-img-top" alt="..." className="img-fluid" />
                        <div class="card-body text-center">
                            <h4>¡Probá la Pileta de Cheddar, che!</h4>
                            <p class="card-text">Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card">
                            <img src={card2} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body text-center">
                                <h4>¡Nueva Bacon Cheddar McMelt!</h4>
                                <p class="card-text">Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Banner;