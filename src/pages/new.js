import React, {useEffect} from 'react';
import {useMutation, gql} from '@apollo/client';


const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note - Notedly'
  })

  return <div>New note</div>
}

export default NewNote