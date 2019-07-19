import Link from 'next/link'

const NavBar = () => (
  <div>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
    <style jsx>{
      `
        ul {
          background: green;
          list-style: none;
          display: flex;
        }
        
        li a {
          text-decoration: none;
          color: white;
        }

        li {
          margin-right: 10px;bn
        }
      
      `

    }
    </style>
  </div>

)



export default NavBar