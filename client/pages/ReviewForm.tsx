import { useState } from 'react'
import { Review } from '../../models/review'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAllReviews } from '../apis/reviews'
import AddReviewForm from '../components/AddReview'
import DeleteReview from '../components/DeleteReview'

export default function ReviewForm() {
  const [formVisible, setFormVisible ] = useState(false)
  const [showBtn, setShowBtn ] = useState(false)

  const { data: review, isPending, isError, error } = useQuery({ 
    queryKey: ['review'],
    queryFn: () => fetchAllReviews(),
  })

  const queryClient = useQueryClient()
  const handleAddReview = (newReview: Review) => {
    queryClient.invalidateQueries({ queryKey: ['review'] })
    setFormVisible(false)
    console.log(newReview)
  }

  if (isPending) return <>Loading...</>
  if (isError) return <>Sorry cannot find reviews.. {error.message}</>
  if (!review) return <>Reviews cant be found</>

  return (
    <div className='flex justify-center items-center bd-grey-100 my-6'>
      <div className='max-w-[500px] px-4 bd-grey-300 border border-grey-100 shadow-md bd-grey pb-2'>
        <h1 className='text-4xl text-center my-2 font-light font-lato'>Past Reviews</h1>
        <ul>
          {review.map((data) => (
            <li key={data.id} className='p-2 border-b-2'>
              {data.hikeName} - {data.comment} - {data.author}
              {showBtn && (
                <DeleteReview id={Number(data.id)} /> 
              )}
            
            </li>
          ))}
        </ul>
      
        <button className='w-full p-2.5 bg-[#4caf50] rounded-md text-black text-lg bold border-2 transition-colors duration-300 ease-in-out hover:bg-[#45a049]' 
          onClick={() => setFormVisible(true)}>Leave a Review
        </button>
        <button className='bg-red-500 rounded-md text-md p-2 text-black my-2 transition-colors duration-300 ease-in-out hover:bg-[#45a049]' 
          onClick={() => setShowBtn(true)}>Delete a review
        </button>
        {formVisible && (
          <AddReviewForm onAdd={handleAddReview} onClose={() => setFormVisible(false)} />
        )}
      </div>
    </div>
  )
}
