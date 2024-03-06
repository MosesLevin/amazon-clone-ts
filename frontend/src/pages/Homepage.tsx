import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'
import { Product } from '../types/Product'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
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
  // using the reducer, with our defined reducer & initial state from above
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
      }
    }
    fetchData()
  }, [])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
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
