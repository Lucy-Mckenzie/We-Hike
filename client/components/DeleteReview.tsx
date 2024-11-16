import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteReviewById } from '../apis/reviews'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  id: number
}

export default function DeleteReview({ id}: Props) {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0() 

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getAccessTokenSilently() 
     await deleteReviewById(id, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['review']})
      console.log("deleted review")
    }
  })


  return (
    <button className="deleteBtn" onClick={() => mutation.mutate()}>Delete Review</button>
  )
}