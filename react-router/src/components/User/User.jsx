import { useParams } from "react-router-dom"

const User = () => {
    const {userId} = useParams()
  return (
    <>
        <div>User</div>
        <p>user Id: {userId}</p>
    </>
  )
}

export default User