import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'
import { Product } from '../types/Product'
//define state types for reducer
type State = {
  products: Product[]
  loading: boolean
  error: string
}
// define action types for reducer, |req|success|fail
type Action =
  | {
      type: 'FETCH_REQUEST'
    }
  | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
  | {
      type: 'FETCH_FAIL'
      payload: string
    }

//initializing reducer state with State types
const initialState: State = {
  products: [],
  loading: true,
  error: '',
}

//define reducer function actions, switch for req|success|fail type defined above
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

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
