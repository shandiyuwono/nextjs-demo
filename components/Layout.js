import NavBar from './NavBar'

import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Demo</title>
    </Head>
    <NavBar />
    {props.children}
  </div>
)

export default Layout