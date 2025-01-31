
const Review = ({ review }) => {
    const { customer_name, customer_review, customer_img } = review;
    return (
        <div className="card card-side bg-base-100 shadow-xl w-3/4">
            <figure>
                <img
                    src={customer_img}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{customer_name}</h2>
                <p>{customer_review}</p>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
};

export default Review;