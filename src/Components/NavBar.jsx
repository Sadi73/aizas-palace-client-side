import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(()=>{
                
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="bg-pink-300 flex justify-between items-center py-3 px-5">
                <div>
                    <h1 className="text-2xl font-bold">AIZAs <br /> Palace</h1>
                </div>
                <div className="flex space-x-10 text-xl">
                    <Link to='/'>Home</Link >
                    <Link to='alltoys'>All Toys</Link >
                    <Link to='mytoys'>My Toys</Link >
                    <Link to='addtoy'>Add a Toy</Link >
                    <Link to='blogs'>Blogs</Link >
                </div>
                <div className="flex gap-2">
                    {
                        user ?
                            <div className="flex items-center gap-5">
                                <h1>{user.email}</h1>
                                <button className="btn" onClick={handleLogOut}>Sign Out</button>

                            </div>
                            :
                            <Link to='/login' className="btn btn-outline ">Login</Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default NavBar;