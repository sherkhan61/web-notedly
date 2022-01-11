import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;  
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm = props => {
  const [value, setValue] = useState({content: props.content || ' '});
}