import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="bg-pink-100 px-10 py-20">
            <h1>Total Toy: {toys.length} </h1>
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
                        {/* <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>

                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                        {
                            toys.map(toy=> <tr key={toy._id}>
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
    );
};

export default AllToys;