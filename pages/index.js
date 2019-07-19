import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import axios from 'axios'

const Index = (props) => (
  <Layout>
    <div>
      {/* <NavBar /> */}
      Hello from Next.js
    </div>
    <ul>
      {props.data.map((people) => {
        return (
          <li>{people.name}</li>
        )
      })}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {

  const { data } = await axios.get('https://swapi.co/api/people')  


  return {
    data: data.results
  }
}

export default Index