# Breadcrumb

### Usage

```
fronthack component Breadcrumb
```

#### JSX example:

```jsx
<Breadcrumb items={[
  {
    path: '/',
    name: 'Docs',
  },
  {
    path: '/',
    name: 'Components API',
  },
  {
    path: '/',
    name: 'Button',
  },
]} />
```

##### Properties

* `items` - nested path of the page as array of strings


#### Static HTML example:

```html
<nav class="breadcrumb">
  <a href="/" class="breadcrumb__item">Docs</a>
  <a href="/" class="breadcrumb__item">Components API</a>
  <a href="/" class="breadcrumb__item">Button</a>
</nav>
```