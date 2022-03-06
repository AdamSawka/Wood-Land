import React, {useContext, useReducer} from "react";
const itemsId = [];

function reducer (state, action) {
    switch (action.type) {
        case 'add':
            return {...state + 1};
        default:
            throw new Error();
    }
}


const Item = ({name, img, price, id}) => {
    const[state, dispatch] = useReducer(reducer, itemsId);

    return <>
        <section className="py-5 item-shop">
            <div className="col mb-5">
                <img alt='deer' className="card-img-top image-shop" src={img}
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{name}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        </div>
                        {price} PLN
                    </div>
                </div>
                <div className="card-footer ">
                    <div className="text-center">
                        <button onClick={()=>dispatch({type: 'add'})} className="btn btn-outline-dark mt-auto" name={id}>Dodaj
                            do koszyka
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export {Item};