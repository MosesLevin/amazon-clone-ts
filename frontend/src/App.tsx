import './App.css'
import { sampleProducts } from './data'

function App() {
  return (
    <div>
      <header>TS Amazonian</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            //set key to unique key of map like slug which is unique because of SEO
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>{'$' + product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
