import axios from 'axios';

const apiReviewsUrl = 'http://localhost:8080/api/reviews';

const getReviews = async (productId) => {
  const response = await axios.get(`${apiReviewsUrl}/${productId}`);
  return response.data;
};

const createReview = async (newReview) => {
  const productId = newReview.productId;

  const requestBody = {
    username: newReview.username,
    body: newReview.body,
    rating: newReview.rating,
  };

  const response = await axios.post(`${apiReviewsUrl}/${productId}`, requestBody);
  return response.data;
};

export { getReviews, createReview };