import { useState, FormEvent, ChangeEvent } from 'react';
import { Review } from '../../models/review'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { fetchAllReviews, addReview } from '../apis/reviews';
interface Props {
  submitLabel: string
  onSubmit: (FormData: Review) => void
}

const hikes = [
  'Routeburn',
  'Lake Waikaremoana',
  'Te mata peak'
]
export default function ReviewForm({submitLabel, onSubmit}: Props) {


  // formState holds current values of form inputs
  const [formState, setFormState] = useState<Review>({ 
  id: 0,
  assetId: '',
  hikeName: '',
  rating: 0
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
    comment: null,
    author: null,
    })
    onSubmit(formState)
    setFormState({  id: 0, assetId: '', hikeName: '', rating: 0})
  } 

    return (
      <div className="formContainer">
      <h1>Leave a review</h1>
      <ul>
        {review.map((data) => (
          <li key={data.id}>
            {data.hikeName} - {data.comment} - {data.author}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="hikeName">
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
            
        </div>
            <button type="submit">{submitLabel}</button>
          </form>
        </div>
    )
  }

// todo 
// add comment input
// add author input 
// pass component and props to parent home/hikes details
// style reviews part 
// test!