import profilepic from './Bunny.jpg';
function Card() {

    return (
        <div className="card">
            <img className='card-img' src={profilepic} alt="profile picture"></img>
            <h2 className='title'>Hi Hiruni</h2>
            <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quae eum necessitatibus tempora iste magnam qui quisquam vitae animi enim voluptatem consectetur, distinctio impedit, eligendi est tempore, assumenda optio? Atque.</p>

        </div>

    );
}
export default Card;