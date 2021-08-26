# Table

### Usage

```
fronthack component Table
```

#### JSX example:

```jsx
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
```

##### Properties

* `labels` - labels on the tab head cells
* `data` - data for table body cells


#### Static HTML example:

```html
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Framework</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Michal</td>
        <td>JavaScript</td>
        <td>React</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>Dart</td>
        <td>Flutter</td>
      </tr>
      <tr>
        <td>Hanna</td>
        <td>Python</td>
        <td>Flask</td>
      </tr>
    </tbody>
  </table>
</div>
```