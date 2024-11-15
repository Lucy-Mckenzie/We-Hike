import { useState, FormEvent, ChangeEvent } from 'react'
import { Review } from '../../models/review'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { fetchAllReviews, addReview } from '../apis/reviews'

const hikes = [
  'Routeburn',
  'Lake Waikaremoana',
  'Te mata peak'
]
export default function ReviewForm() {

  // formState holds current values of form inputs
  const [formState, setFormState] = useState<Review>({ 
  id: 0,
  assetId: '',
  hikeName: '',
  rating: 0,
  comment: '',
  author: ''
  })

  const { data: review, isPending, isError } = useQuery({ 
    queryKey: ['review'],
    queryFn: () => fetchAllReviews(),
  })

  const queryClient = useQueryClient()
  const addReviewMutation = useMutation({
    mutationFn: (review: Review) => addReview(review),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['review'] })
    },
  })

  // When the user types something, this function is triggered
  const handleChange = ( event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  } 

  if (isPending) {
   return <>Loading...</>
  }

  if (isError) {
   return <>Sorry cannot find reviews..</>
  }

  // handleSubmit is called when the form is submitted
  // It prevents the default form submission and calls onSubmit, sending formState as data to the parent
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addReviewMutation.mutate({
    id: formState.id,
    assetId: formState.assetId,
    hikeName: formState.hikeName,
    rating: formState.rating,
    comment: formState.comment,
    author: formState.author,
    })
    setFormState({  id: 0, assetId: '', hikeName: '', rating: 0, comment: '', author: ''})
  } 

    return (
      <div className="ReviewFormContainer">
      <h1>Leave a review</h1>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <label htmlFor="hikeName">Choose a Hike:</label>
          <select
            name="hikeName"
            value={formState.hikeName}
            onChange={handleChange}
            required
          >
            <option value="">Select a hike</option>
            {hikes.map((hike, index) => (
              <option key={index} value={hike}>
                {hike}
              </option>
            ))}
          </select>
        </div>
        <div className="comment">
        <label htmlFor="comment">Your Comment:</label>
        <input
          type="text"
          name="comment"
          className="text"
          value={formState.comment}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="author">
        <label htmlFor="author">Your Name:</label>
        <input
          type="text"
          name="author"
          className="text1"
          value={formState.author}
          onChange={handleChange}
          required
        />
      </div>
      
            <button type="submit">Submit review</button>
          </form>
          <ul>
        {review.map((data) => (
          <li key={data.id}>
            {data.hikeName} - {data.comment} - {data.author}
          </li>
        ))}
      </ul>
      <button type="submit">Update review</button>
        </div>
    )
  }
