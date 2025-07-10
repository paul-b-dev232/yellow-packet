/* The PetFilter component alters the filter object to intuitively filter the pet cards that are being shown */

/** Upon change of each component, the filter applied will be stored in an object "filters" that contains the value input by the user. The lists: types, shelters, age_stages, sizes, are the values available for filtering. These will come from the database. If there is only one type for any of these filters, the choice for that filter will not be displayed.  */
import "../styles/BrowsePets.css";



export default function PetFilter({ filters, setfilters, types, shelters, age_stages, sizes, sexes }){

    /** The following handle functions update the filters state */
    const handleTypeChange = (e) => {
        const newFilters = {
            ...filters,
            type: e.target.value
        }
        setfilters(newFilters);
    }

    const handleShelterChange = (e) => {
        const newFilters = {
            ...filters,
            shelter: e.target.value
        }
        setfilters(newFilters);
    }

    const handleAgeStageChange = (e) => {
        const newFilters = {
            ...filters,
            age_stage: e.target.value
        }
        setfilters(newFilters);
    }

    const handleSizeChange = (e) => {
        const newFilters = {
            ...filters,
            size: e.target.value
        }
        setfilters(newFilters);
    }

    const handleSexChange = (e) => {
        const newFilters = {
            ...filters,
            sex: e.target.value
        }
        setfilters(newFilters);
    }

    if (types.length < 1 &&
        shelters.length < 1 &&
        age_stages.length < 1 &&
        sizes.length < 1 &&
        sexes.length < 1
    ) {
        return <main className="pet-filter-container">
                <h2 className="pet-filter-heading"> No Filters Available</h2>
        </main>
    }

    return ( 
    <>
        <main className="pet-filter-container">
            <h2 className="pet-filter-heading">Filters</h2>

                {
                // shows the dropdown if there is more than one option    
                types.length > 1 && 
                <>
                    <label htmlFor="pet-type">Type:</label>
                    <select id="pet-type" name="pet-type" onChange={handleTypeChange}>
                        <option value="">All</option> {/* show an all option that allows users to clear this filter */}
                            {
                                // show all types available
                                types.map((type) => (
                                    <option value={type}>{type}</option>
                                ))
                            }
                    </select>
                </>}

                {
                // shows the dropdown if there is more than one option    
                shelters.length > 1 && 
                <>              
                    <label htmlFor="pet-shelter">Shelter</label>
                    <select id="pet-shelter" name="pet-shelter" onChange={handleShelterChange}>
                        <option value="">All</option> {/* show an all option that allows users to clear this filter */}
                        {
                            // show all shelters available
                            shelters.map((shelter) => (
                                <option value={shelter}>{shelter}</option>
                            ))
                        }
                    </select>
                </>} 

                {
                // shows the dropdown if there is more than one option    
                age_stages.length > 1 && 
                <>
                    <label htmlFor="pet-age">Age:</label> 
                    <select id="pet-age" name="pet-age" onChange={handleAgeStageChange}>
                        <option value="">All</option> {/* show an all option that allows users to clear this filter */}
                        {
                            // show all age stages available
                            age_stages.map((age) => (
                                <option value={age}>{age}</option>
                            ))
                        }
                    </select>
                </>}

                {
                // shows the dropdown if there is more than one option    
                sizes.length > 1 && 
                <>
                    <label htmlFor="pet-size">Size:</label>
                    <select id="pet-size" name="pet-size" onChange={handleSizeChange}>
                        <option value="">All</option> {/* show an all option that allows users to clear this filter */}
                        {
                            // show all sizes available
                            sizes.map((size) => (
                                <option value={size}>{size}</option>
                            ))
                        }
                    </select>
                </>}

                {
                // shows the dropdown if there is more than one option    
                sexes.length > 1 && 
                <>
                    <label htmlFor="pet-sex">Sex:</label>
                    <select id="pet-sex" name="pet-sex" onChange={handleSexChange}>
                        <option value="">All</option> {/* show an all option that allows users to clear this filter */}
                        {
                            // show all sexes available
                            sexes.map((sex) => (
                                <option value={sex}>{sex}</option>
                            ))
                        }
                    </select>
                </>}

        </main>
    </>
    );
};