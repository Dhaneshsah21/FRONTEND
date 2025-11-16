
const Karnataka = () => {

    return (
        <>
        <Cinema/>
        <Traditional/>
        </>
    )
}

export default Karnataka

export const Cinema = () => {

    return (
        <>
            <div className="cinema">
                <div>
                    <h2>CINEMA IN KARNATAKA</h2>
                </div>
                <div>
                    <p>Karnataka cinema, also known as Sandalwood, is one of India’s major film industries, known for its strong storytelling, unique themes, and talented actors. It has produced many memorable movies in action, drama, and romance, along with meaningful films that highlight social issues. Bengaluru is the center of Kannada cinema, with many studios, production houses, and creative artists working in the industry. Legendary actors like Dr. Rajkumar laid the foundation, while modern stars like Puneeth Rajkumar, Yash, and Rakshit Shetty have taken Kannada films to national and global audiences. With growing technology, fresh directors, and successful movies, Karnataka’s film industry continues to expand and entertain viewers across India.</p>
                </div>
            </div>
            <Movies/>
        </>
    )
}
export const Traditional = () => {

    return (
        <>
            <div className="tradinals">
                <div>
                    <h2>TRADITIONAL IN KARNATAKA</h2>
                </div>
                <div>
                    <p>Karnataka has a rich and colorful tradition shaped by its history, culture, and diverse communities. The state is known for classical music, traditional dance forms like Yakshagana, and beautiful handicrafts such as Mysore silk, sandalwood carvings, and rosewood art. Festivals like Ugadi, Dasara, and Karaga highlight Karnataka’s customs through rituals, music, and vibrant celebrations. Traditional food, including dishes like bisi bele bath and ragi mudde, also reflects the state’s heritage. With its mix of ancient practices, folk arts, and cultural values, Karnataka’s traditions continue to be an important part of everyday life.</p>
                </div>
            </div>

        </>
    )
}
export const Movies = () => {
    return (
        <>
            <div className="movies">
                <div>
                    <h2>Movies in Karnataka</h2>
                </div>
                <div>
                    <ul>
                        <li>Kantara</li>
                        <li>K.G.F Chapter 1</li>
                        <li>K.G.F Chapter 2</li>
                        <li>Rajkumar – Bangaarada Manushya</li>
                        <li>Lucia</li>
                        <li>Ulidavaru Kandanthe</li>
                        <li>Ugramm</li>
                        <li>Kirik Party</li>
                        <li>Charlie 777</li>
                        <li>Mufti</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

