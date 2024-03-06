import { Alert } from 'react-bootstrap'

import React from 'react'

// prop types
type Message = {
  variant?: string
  children: React.ReactNode
}
// messagebox for axios req/res/err has props with type
export default function MessageBox({ variant = 'info', children }: Message) {
  return <Alert variant={variant || 'info'}>{children}</Alert>
}

// export default function MessageBox({ variant = 'info', children }): {
//   variant?: string
//   children: React.ReactNode
// } {
//   return <Alert variant={variant || 'info'}>{children}</Alert>
// }
