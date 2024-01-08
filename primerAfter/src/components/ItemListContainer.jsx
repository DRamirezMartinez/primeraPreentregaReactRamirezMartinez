const ItemListContainer = ({greeting}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center display-6">
                <div class="alert alert-warning p-3" role="alert">{greeting}</div>
                </div>
            </div>
        </div>
           
    )
}
export default ItemListContainer; 