function TrailCard({trail}){
return(
    <div className="TrailCard">
        <img src={trail.image} alt={trail.name} className="trail-image"/>
        <h5>
            </h5>
        <h4 className="trail-name">{trail.name}</h4>
        <h5 classname="hiking-des">Length:{trail.length} mi ~ </h5>
        <h3> {trail.reviews.map((review, index) => (
        <div key={index}>
          <li>{review.body}</li>
          <li>{review.condition}</li>
          <li>{review.rating}</li>
        </div>
      ))}</h3>

    </div>
)}

export default TrailCard