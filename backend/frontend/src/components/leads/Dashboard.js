import React, {Fragment} from 'react';
import Leads from './leads';
import Form from './Form';

export default function Dashboard() {
  return (
    <Fragment>
      <Form/>
      <Leads/>
    </Fragment>
  )
}
