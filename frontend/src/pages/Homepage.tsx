import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'

export default function Homepage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        //set key to unique key of map like slug which is unique because of SEO, with bootstrap for smaller device view
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <Link to={'/product/' + product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>{'$' + product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  )
}