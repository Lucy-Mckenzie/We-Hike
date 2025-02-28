import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAllReviews } from '../apis/reviews'
import AddReviewForm from '../components/AddReview'

export default function ReviewForm() {
  const [formVisible, setFormVisible ] = useState(false)

  const { data: review, isPending, isError, error } = useQuery({ 
    queryKey: ['review'],
    queryFn: () => fetchAllReviews(),
  })

  const queryClient = useQueryClient()
  const handleAddReview = () => {
    queryClient.invalidateQueries({ queryKey: ['review'] })
    setFormVisible(false)
  }

  if (isPending) return <>Loading...</>
  if (isError) return <>Sorry cannot find reviews.. {error.message}</>
  if (!review) return <>Reviews cant be found</>

  return (
    <div className='flex justify-center items-center flex-col mb-20 px-44'>
      <h1 className='text-4xl text-center my-2'>
          REVIEWS
      </h1>
      <h2 className='text-4xl font-bold text-black pb-16'>
          Read what others have to say
      </h2>
      <div className='grid grid-cols-3 grid-rows-1 gap-6'>
        {review.map((review, index) => (
          <div key={index} className='relative flex items-center bg-[#727e5a]/30 rounded-lg shadow-md text-black flex-col py-5 px-12 text-center'>
            <h1 className='text-2xl pt-5'>
              {review.author}
            </h1>
            <div className='rating rating-sm' role='radiogroup' aria-labelledby='rating-label'>
              <span id='rating-label' className='sr-only'>
                  Rating: 5 out of 5 stars
              </span>
              {[...Array(Math.floor(Math.random() * 4) + 2)].map((_, index) => (
                <input 
                  key={index}
                  type='radio' 
                  name='rating-2'
                  id={`Star ${index + 1}`}
                  className='mask mask-star-2 bg-orange-400 px-2.5 py-4'
                  checked readOnly
                  aria-label={`Star ${index + 1}`}
                />
              ))}
            </div>
            <h2 className='text-md font-semibold'>
              {review.hikeName}
            </h2>
            <h2 className='text-sm pt-2'>
              {review.comment}
            </h2>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-start'> 
        <button className='m-5 p-2 rounded-full bg-[#6b9dca] text-white transition-colors duration-300 ease-in-out hover:bg-[#486a88]'
          onClick={() => setFormVisible(true)}>Leave a Review
        </button>
      </div>
      {formVisible && (
        <AddReviewForm onAdd={handleAddReview} onClose={() => setFormVisible(false)} />
      )}
    </div>
  )
}

