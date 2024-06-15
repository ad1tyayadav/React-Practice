import { useState } from "react"

export default function CommentForm() {

    let [formData, setFormData] = useState({ username: "", review: "", rating: "5" });
    const [reviews, setReviews] = useState([]);

    let handleEvents = (event) => {
        setFormData(currData => ({
            ...currData,
            [event.target.name]: event.target.value
        }));
    };

    let submit = (event) => {
        event.preventDefault();
        setReviews(currentReviews => [...currentReviews, formData]);
        setFormData({ username: "", review: "", rating: "5" });;
    };

    return (
        <>
            <h3>Give Geniune reviews</h3>
            <form action="" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" placeholder="enter your username" name="username" id="username" value={formData.username} onChange={handleEvents} />
                <br />
                <label htmlFor="review">Review</label>
                <br />
                <textarea type="text" placeholder="enter your review" name="review" id="review" value={formData.review} onChange={handleEvents} />
                <br />
                <label htmlFor="rating">Rating</label>
                <br />
                <input type="range" max={5} placeholder="rating" name="rating" id="rating" value={formData.rating} onChange={handleEvents} />
                <br />
                <button type="submit">Sumbit</button>
            </form>
            <div>
                <h4>Reviews Details</h4>

                {reviews.map((review, index) => (
                    <div key={index}>
                        <p><strong>Username:</strong> {review.username}</p>
                        <p><strong>Review:</strong> {review.review}</p>
                        <p><strong>Rating:</strong> {review.rating}/5</p>
                        <hr />
                    </div>
                ))}

            </div>
        </>
    )
}