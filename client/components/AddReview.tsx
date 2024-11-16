import { Review } from '../../models/review'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { addReview } from '../apis/reviews'
import { useAuth0 } from '@auth0/auth0-react'

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
  const { getAccessTokenSilently } = useAuth0() 

  const { mutate, isSuccess } = useMutation({
    mutationFn: async (review: Review) => {
      const token = await getAccessTokenSilently() // Get the token
      return addReview(review, token) // Passes token to addReview function
    },
    onSuccess: (data) => {
      onAdd(data)  // Pass the added review back to the parent
      setNewReview(emptyReview)  // Reset the form
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
    <div className="w-full border-t-2 mt-5">
      <h2 className="text-center text-[30px] mt-4">Add new review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="hikeName" className="block font-bold mb-1 text-[#555]">Hike:</label>
        <select
          name="hikeName"
          className="w-full p-2 mb-4 border border-grey-300 rounded text-sm"
          value={newReview.hikeName}
          onChange={handleChange}
          required
        >
        <option>Select a hike</option>
        {hikes.map((hike, index) => (
          <option key={index} value={hike}>
            {hike}
          </option>
        ))}
      </select>

        <label htmlFor="comment"  className="block font-bold mb-1 text-[#555]">Add a comment:</label>
        <input
          type="text"
          name="comment"
          className="w-full p-2 mb-4 border border-grey-300 rounded text-sm"
          value={newReview.comment}
          onChange={handleChange}
        />
         <label htmlFor="author" className="block font-bold mb-1 text-[#555]">Your Name:</label>
        <input
          type="text"
          name="author"
          className="w-full p-2 mb-4 border border-grey-300 rounded text-sm"
          value={newReview.author}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={!newReview.hikeName  || !newReview.comment || !newReview.author} className="bg-[#4caf50] rounded-md text-black bold border-2 px-2  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#45a049]">
          Add review
        </button>
        {isSuccess && <p>Your review was added successfully!</p>}
        <button type="button" className="bg-[#4caf50] rounded-md text-black bold border-2 px-2 ml-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#45a049]" onClick={onClose}>
          Close
        </button>
        </form>
      </div>
  )
}
