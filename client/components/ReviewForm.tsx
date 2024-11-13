import { useState, FormEvent, ChangeEvent } from 'react';
import { Review } from '../../models/review'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { fetchAllReviews, addReview } from '../apis/reviews';
interface Props extends FormData {
  submitLabel: string
  onSubmit: (_: FormData) => void
}

export default function ReviewForm() {


  // formState holds current values of form inputs
  const [formState, setFormState] = useState({ 
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
  const handleChange = ( event: ChangeEvent<HTMLInputElement>) => {
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
    setFormState({  id: 0, assetId: '', hikeName: '', rating: 0})
  } 

    return (
      <div className="formContainer">
        <h1>Review a hike!</h1>
        {review.map((data) => {
          return <li key={data.id}>{data.hikeName} - {data.comment} - {data.author} </li>
        })}
       <form onSubmit={handleSubmit}>

        {/* <button type="submit">{submitLabel}</button> */}
       </form>
      </div>
    )
  }
