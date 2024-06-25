import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const toys = useLoaderData();
    const myToys = toys.filter(toy => toy.user === user.email );
    console.log(myToys)
    
    return (
        <div>
            <div className="bg-pink-100 px-10 py-20">
            <h1>Total Toy: {myToys.length} </h1>
            <div className="overflow-x-auto min-h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available</th>
                            <th>Seller</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            myToys.map(toy=> <tr key={toy._id}>
                                <td>  <img src={toy.photoURL} alt="" className="w-24" /> </td>
                                <td> {toy.name} </td>
                                <td> {toy.category} </td>
                                <td> {toy.price} </td>
                                <td> {toy.rating} </td>
                                <td> {toy.quantity} </td>
                                <td> {toy.seller} </td>
                                <td> {toy.user} </td>
                                
                            </tr> )
                        }
                        
                    </tbody>
                    

                </table>
            </div>

        </div>
        </div>
    );
};

export default MyToys;