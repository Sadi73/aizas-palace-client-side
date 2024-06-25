import { useContext } from "react";
import { AuthContext } from "./providers/AuthProviders";

const AddToy = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;

        const newToy = { name, category, price, photoURL, rating, quantity, seller, user: user.email }

        fetch('http://localhost:5000/alltoydetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy has been added successfully');
                    form.reset();

                }
            })

        // console.log();

    }
    return (
        <div className="bg-pink-100">
            <form className="space-y-3 w-1/2 mx-auto py-32" onSubmit={handleSubmit}>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="" className="">Category</label>
                    {/* <input type="text" className="border-2 p-2"/> */}
                    <select name="category" id="" className="border-2 p-2">
                        <option value="">-------Select Sub-category-------</option>
                        <option value="sportsCar">Sports Car</option>
                        <option value="fireTruck">Mini Fire Truck</option>
                        <option value="policeTruck">Mini Police Car</option>
                    </select>
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Photo URL</label>
                    <input type="text" name="photoURL" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Rating</label>
                    <input type="text" name="rating" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Available Quantity</label>
                    <input type="text" name="quantity" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <label htmlFor="">Seller</label>
                    <input type="text" name="seller" className="border-2 p-2" />
                </div>
                <div className="grid grid-cols-[200px_500px]">
                    <div></div>
                    <input type="submit" value="ADD" className="btn btn-info" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;