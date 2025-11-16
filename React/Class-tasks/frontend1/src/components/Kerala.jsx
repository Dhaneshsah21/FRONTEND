
const Kerala = ()=>{

    return(
        <>
        <Festivals/>
        <Tourism/>
        </>
    )
}

export default Kerala

export const Festivals= ()=>{

    return(
        <>
        <div className="festivals">
            <div><h2> FESTIVALS IN KERALA</h2></div>
            <div>
            <p>Kerala is known for its colorful and traditional festivals that reflect its rich culture. Onam is the biggest celebration, marked by flower decorations, boat races, and delicious feasts. Vishu is another important festival that welcomes the Malayalam New Year with lights, prayers, and the Vishu Kani. The state also celebrates Thrissur Pooram, famous for decorated elephants, drums, and fireworks. Many temples hold unique festivals with traditional music and rituals. Together, these festivals bring families and communities together and show the beauty of Kerala’s heritage.</p>
            </div>
        </div>
        </>
    )
}

export const Tourism = ()=>{

    return(
        <>
        <div className="tourism">
            <div><h2>TOURISM IN KERALA</h2></div>
            <div>
                <p>Kerala is one of India’s most popular tourist destinations, known for its calm backwaters, green landscapes, and beautiful beaches. Places like Munnar, Alappuzha, Wayanad, and Kochi attract visitors with their hill stations, houseboats, wildlife, and historic sites. The state is also famous for its Ayurvedic treatments, waterfalls, and peaceful villages. With friendly people, tasty food, and natural beauty everywhere, Kerala offers a relaxing and memorable travel experience for tourists.</p>
            </div>
        </div>
        <TouristPlace/>
        </>
    )
}

export const TouristPlace = () => {
    return(
        <>
        <div className="place">
          <div>
            <h2>Tourist Places in Kerala</h2>
          </div>
          <div>
            <ul>
                <li>Allepey</li>
                <li>Waynad</li>
                <li>Varkala</li>
                <li>Kozhikode</li>
                <li>Thekkady</li>
                <li>Munnar</li>
            </ul>
          </div>
        </div>
        </>
    )
}