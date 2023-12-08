import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <h1> Welcome to MyPedia. </h1>
        <p>
          Choose a book from the top and start writing!
        </p>
        <h2>
          Techniques used making this website:
        </h2>
        <h3> Frontend</h3>
        <ul>
          <li> React </li>
          <li> ReactRouter </li>
          <li> Axios </li>
          <li> TipTap </li>
        </ul>
        <h3> Backend </h3>
        <ul>
          <li> Sequelize </li>
          <li> SQL </li>
          <li> Express </li>
        </ul>
          
      </div>
    </div>
  )
}
export default Home

