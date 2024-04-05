
function Button({guitarDetails, updateCart}){

    // const handleClick = (guitarDetails) => {
    //     updateCart(guitarDetails)
    // }

    return (
        <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick = {() => updateCart(guitarDetails)}
                >Agregar al Carrito</button>
    )
}

export default Button