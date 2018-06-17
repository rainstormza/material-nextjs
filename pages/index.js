import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import withRoot from '../src/withRoot'

class Index extends Component {
  render() {
    return (
      <div>
        <p>Welcome to next.js!</p>
        <style jsx global>{`
          body {
            background: salmon !important;
            font: 11px menlo;
            color: #fff;
          }
        `}</style>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

// export default Index
export default withRoot(Index)

// export default () => (
//   <div>
//     <p>Welcome to next.js!</p>
//     <Button variant="raised" color="primary">
//       Hello World
//     </Button>
//   </div>
// )
