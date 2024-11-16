import { useState } from 'react'
import { Review } from '../../models/review'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAllReviews } from '../apis/reviews'
import AddReviewForm from './AddReview'

export default function ReviewForm() {
  const [formVisible, setFormVisible ] = useState(false)

  const { data: review, isPending, isError } = useQuery({ 
    queryKey: ['review'],
    queryFn: () => fetchAllReviews(),
  })

  const queryClient = useQueryClient()
  const handleAddReview = (newReview: Review) => {
    queryClient.invalidateQueries({ queryKey: ['reviews'] })
    setFormVisible(false)
    console.log(newReview)
  }

  if (isPending) return <>Loading...</>
  if (isError) return <>Sorry cannot find reviews..</>
 

    return (
      <div className="ReviewFormContainer">
      <h1>Past Reviews</h1>
          <ul>
        {review.map((data) => (
          <li key={data.userId}>
            {data.hikeName} - {data.comment} - {data.author}
          </li>
        ))}
      </ul>
      
      <button onClick={() => setFormVisible(true)}>Leave a Review</button>

      {formVisible && (
        <AddReviewForm onAdd={handleAddReview} onClose={() => setFormVisible(false)} />
      )}
      </div>
    )
  }
