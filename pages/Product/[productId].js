import { useRouter } from 'next/router'

export default function ProductView() {
    const { query } = useRouter()
    console.log(query.productId, "query")
  return (
    <div>
      <p> Welcome to the single product page {query.productId}</p>
    </div>
  )
}
