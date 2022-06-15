import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  console.log("Changes 123")
  return (
    <>
    <h1>
    Home Page
    </h1>
    <button onClick={() => navigate('/about')}> Navigate to About Page </button>
    <button onClick={() => navigate('/contact')}> Navigate to Contact Page </button>
    </>

  )
}

export default Home