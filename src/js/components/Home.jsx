import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import UserCard from "./UserCard";
//create your first component
const Home = () => {

    const users = [
        { name: "gato", age: 28, work: "Ingegato" },
        { name: "gato", age: 34, work: "Gatiseñador" },
        { name: "gato", age: 22, work: "Gatorrolladora" },
        { name: "gato", age: 40, work: "Profegator" },
    ];

    return (
        <>
            <Navbar />
            <Jumbotron />

            <div className="container mt-4">
                <div className="row g-4">
                    {users.map((user, index) => (
                        <div key={index} className="col-12 col-md-4 col-lg-3">
                            <UserCard 
                                name={user.name} 
                                age={user.age} 
                                work={user.work} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Home;