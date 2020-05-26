import React from 'react'

import Placeholder from './Placeholder'
import Sudoku from './Sudoku'
import ArtistFlow from './Artist_Flow'
import NewsMe from './NewsMe'
import Pacman from './Pacman'
import Snake from './Snake'

const SingleProject = ({ slideIndex }) => {

  return <div>
    {slideIndex === 1 ?
      <Placeholder />
      : null
    }
    {slideIndex === 2 ?
      <Sudoku />
      : null
    }
    {slideIndex === 3 ?
      <ArtistFlow />
      : null
    }
    {slideIndex === 4 ?
      <NewsMe />
      : null
    }
    {slideIndex === 5 ?
      <Pacman />
      : null
    }
    {slideIndex === 6 ?
      <Snake />
      : null
    }
  </div>
}


export default SingleProject