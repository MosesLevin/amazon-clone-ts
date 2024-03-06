//component with props&prop types, inside the component destructure props to get them individually
function Rating(props: {
  rating: number
  numReviews?: number
  caption?: string
}) {
  const { rating, numReviews, caption } = props
  return (
    <div className="rating">
      <span>
        {/* using fontawesome we conditional the className toggled so the icon shows according to star/half star number */}
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : numReviews != 0 ? (
        <span>{' ' + numReviews + ' reviews'}</span>
      ) : (
        ''
      )}
    </div>
  )
}

export default Rating
