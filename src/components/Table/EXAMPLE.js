import React from 'react'
import Table from '.'

export default () =>
  <Table
    labels={[
      { name: 'Name', field: 'name' },
      { name: 'Language', field: 'language' },
      { name: 'Framework', field: 'framework' },
    ]}
    data={[
      { name: 'Michal', language: 'JavaScript', framework: 'React' },
      { name: 'Jacob', language: 'Dart', framework: 'Flutter' },
      { name: 'Hanna', language: 'Python', framework: 'Flask' },
    ]}
  />
