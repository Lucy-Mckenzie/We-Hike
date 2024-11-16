import { Review } from '../../models/review'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { addReview } from '../apis/reviews'

const hikes = [
  'Routeburn',
  'Lake Waikaremoana',
  'Te mata peak'
]

const emptyReview: Review = {
  hikeName: '',
  comment: '',
  author: ''
}

interface Props {
  onAdd: (review: Review) => void
  onClose: () => void
}

export default function AddReviewForm({ onAdd, onClose }: Props) {
  const [newReview, setNewReview] = useState<Review>(emptyReview)

 const { mutate, isSuccess } = useMutation({
  mutationFn: (review: Review) => addReview(review),
  onSuccess: (data) => {
    onAdd(data)
    setNewReview(emptyReview)
  }
 })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setNewReview({
      ...newReview,
      [name]: value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate(newReview)  // Passes the form data to the parent component
  }

  return (
    <div className="addReviewFormContainer">
      <h2 className="newReviewT">Add new review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="hikeName">Hike name:</label>
        <select
          name="hikeName"
          id="hikeName"
          value={newReview.hikeName}
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

        <label htmlFor="comment">Add a comment:</label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={newReview.comment}
          onChange={handleChange}
        />
         <label htmlFor="author">Your Name:</label>
        <input
          type="text"
          name="author"
          className="text1"
          value={newReview.author}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={!newReview.hikeName  || !newReview.comment || !newReview.author}>
          Add review
        </button>
        {isSuccess && <p>Your review was added successfully!</p>}
        <button type="button" onClick={onClose}>
          Close
        </button>
        </form>
      </div>
  )
}
