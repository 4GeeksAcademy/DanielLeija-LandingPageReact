import React from "react";
import Cards from "../../components/Cards/Cards.jsx"
import Title from "../../components/Title/Title.jsx"
const Home = () => {
    return (
        <>
               <Title/>
            <div className="row">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

        </>
    )

}
export default Home;