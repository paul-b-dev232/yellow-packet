/* 
This component filters the pet cards that are being shown but also has filters of it's own to change with filters are being shown. For example: don't show the breeds filter unless type == 'dog'
*/
import React from "react";
import "../styles/BrowsePets.css";


 
export default function PetFilter(){

    

    return ( 
    <>
        <main id="pet-filter-container">
            <h2 id="pet-filter-heading">Filter</h2>
            <form id="pet-filter-form">
                <label htmlFor="pet-type">Type:</label>
                <select id="pet-type" name="pet-type">
                    <option value="all">All</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="pet-age">Age:</label> 
                <select id="pet-age" name="pet-age">
                    <option value="all">All</option>
                    <option value="baby">{"<"} 6 months</option>
                    <option value="young">6 months - 2 years</option>
                    <option value="adult">2 years - 7 years</option>
                    <option value="senior">{"7 years+"}</option>
                </select>
{/* 
                <label htmlFor="pet-size">Size:</label>
                <select id="pet-size" name="pet-size">
                    <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select> */}

                <label htmlFor="pet-sex">Sex:</label>
                <select id="pet-sex" name="pet-sex">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <button type="submit" id="apply-filters-btn">Apply Filters</button>
            </form>
        </main>
    </>
    );
};