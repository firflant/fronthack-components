import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './style/index.sass';
import Alert from './components/Alert';
import Field from './components/Field';
import Icon from './components/Icon';
import Button from './components/Button';
import Badge from './components/Badge';
import HamburgerNav from './components/HamburgerNav';
import Stepper from './components/Stepper';
import LanguageSelect from './components/LanguageSelect';
import ListingItem from './components/ListingItem';
import Breadcrumb from './components/Breadcrumb';
import Logo from './components/Logo';
import Modal from './components/Modal';
import NavHorizontal from './components/NavHorizontal';
import NavSubway from './components/NavSubway';
import Pagination from './components/Pagination';
import Parallax, { ParallaxGroup } from './components/Parallax';
import ProgressBar from './components/ProgressBar';
import { Form, FormInput } from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBar percentage={45} />
        <NavHorizontal links={[
          {
            label: 'Home',
            url: 'home',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        <NavSubway links={[
          {
            label: 'Home',
            url: 'home',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        <Pagination
          pages={5}
          callback={item => alert(item)}
          current={3}
        />
        <Modal
          size="lg"
          title="Modal title"
          trigger={<Button variant="primary">Open modal</Button>}
          // isOpen
        >
          Modal content
        </Modal>
        <Logo />
        <Breadcrumb items={['Docs', 'Components API', 'Button']} />
        <ListingItem
          id="12345"
          title="Featured article name"
          date="16 October 2018"
          description="Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          mediaUrl="http://placehold.it/200x145"
        />
        <LanguageSelect
          languages={[
            {
              name: 'English',
              callback: () => alert('Callback. It can be history.push or anything'),
            },
            {
              name: 'Polish',
              callback: () => alert('Callback. It can be history.push or anything'),
            },
          ]}
          current="English"
        />
        <Alert message="Example message" type="success"/>
        <Stepper
          steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
          current={2}
        />
        <HamburgerNav links={[
          {
            label: 'Home',
            url: 'home',
            icon: 'home',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        <div>Test<Badge number={7}/></div>
        <div><Icon type="bell" /><Badge number={7}/></div>
        <Field label="Field label" spacing values={[
          'Multiple value',
          'Another value',
          'Third value',
        ]}/>
        <Field label="Field label" inlineLabel>Single value</Field>
        <Form fields={['username', 'framework', 'color', 'car']}>
          <FormInput
            fieldname="username"
            label="User name"
            type="text"
            placeholder="Enter username"
            initialHelp="Required field"
            required
          />
          <FormInput
            fieldname="framework"
            label="Select a Framework"
            type="select"
            options={[
              { label: 'React', value: 'react' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angluar', value: 'angluar' },
            ]}
            initialHelp="Select from the list"
          />
          <FormInput
            fieldname="car"
            label="Select cars"
            type="checkbox"
            options={[
              { label: 'Toyota', value: 'toyota' },
              { label: 'Renault', value: 'renault' },
              { label: 'Volkswagen', value: 'volkswagen' },
            ]}
            initialHelp="You can pick a few"
          />
          <FormInput
            fieldname="color"
            label="Pick a color"
            type="radio"
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Yellow', value: 'yellow' },
              { label: 'Blue', value: 'blue' },
            ]}
            initialHelp="Choose one"
          />
        </Form>
        <Parallax>
          <ParallaxGroup className="parallax__demo-solid">
            <div class="parallax_demo-title">Solid base layer</div>
          </ParallaxGroup>
          <ParallaxGroup backLayer={
            <Fragment>
              <img class="full-width" src="https://placeimg.com/640/480/nature" alt="" />
              <div class="parallax_demo-title">Back layer</div>
            </Fragment>
          }>
            <div class="parallax_demo-title">Transparent base layer</div>
          </ParallaxGroup>
          <ParallaxGroup className="parallax__demo-solid">
            <div class="parallax_demo-title">Solid base layer</div>
          </ParallaxGroup>
          <ParallaxGroup className="parallax__demo-solid">
            <div class="parallax_demo-title">Solid base layer</div>
          </ParallaxGroup>
        </Parallax>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
