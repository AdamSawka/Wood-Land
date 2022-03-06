import React, {useContext} from "react";
const itemsId = [];
const ItemIdContext = React.createContext(itemsId);

const Item = ({name, img, price, id}) => {

    const ItemIdContext2 = useContext(ItemIdContext)
    const handleClick = (e) => {
        e.preventDefault();
      return <ItemIdContext2.Provider value ={id}/>
    };

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
                        <button onClick={handleClick} className="btn btn-outline-dark mt-auto" name={id}>Dodaj
                            do koszyka
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export {Item};