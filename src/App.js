import React from 'react'
// import logo from './logo.svg'
import './style/index.sass'
// import Alert from './components/Alert'
import Accordion, { AccordionItem } from './components/Accordion'
// import Dropdown from './components/Dropdown'
// import Field from './components/Field'
import Icon from './components/Icon'
import Button from './components/Button'
// import Badge from './components/Badge'
import HamburgerNav from './components/HamburgerNav'
// import Stepper from './components/Stepper'
// import LanguageSelect from './components/LanguageSelect'
// import ListingItem from './components/ListingItem'
// import Breadcrumb from './components/Breadcrumb'
// import Logo from './components/Logo'
// import Modal from './components/Modal'
import NavHorizontal from './components/NavHorizontal'
// import NavSubway from './components/NavSubway'
// import Pagination from './components/Pagination'
// import Parallax, { ParallaxGroup } from './components/Parallax'
// import ProgressBar from './components/ProgressBar'
// import Rating from './components/Rating'
// import SocialLinks from './components/SocialLinks'
import Tabs from './components/Tabs'
// import TabsInput from './components/TabsInput'
import Form, {
  FormThemeProvider,
  Input,
  TextArea,
  Select,
  MultiSelect,
  Checkbox,
  Checkboxes,
  Radio,
  ImageSelect,
  Slider,
  ImageUpload,
  FormRow,
  FormActions,
  FormButton,
  MultiFormInput,
  Switch,
  Switches,
  MultiImageUpload,
} from 'react-standalone-form'


class App extends React.Component {
  state = {
    framework: 'vue',
  }
  render() {
    return (
      <FormThemeProvider theme={{
        colors: { accent: 'blue' },
        sizes: {
          onlyBottomBorder: true,
          borderWidth: 2,
          addonSpacing: 15,
        },
        customValidationFunction: (value, type) => {
          switch (type) {
            case 'michal':
              return value !== 'Michal' && 'You did not typed name "Michal"'
          }
        },
      }}>
        <div className='container'>
          <Form fields={['input', 'switches']} allRequired onChange={fields => console.log(fields)}>
            <FormThemeProvider theme={{
              sizes: { inputHeight: 60 },
            }}>
              <Input name='input' label='Input' addon={<Icon type='user' />} />
            </FormThemeProvider>
            <Switches
              name='switches'
              label='Switches'
              options={[
                { label: 'Toyota', value: 'toyota' },
                { label: 'Renault', value: 'renault' },
                { label: 'Volkswagen', value: 'volkswagen' },
              ]}
            />
            <FormButton callback={fields => console.log(fields)}>Submit</FormButton>
          </Form>
          <Accordion>
            <AccordionItem title='First accordion item'>
              Content for the first accordion
            </AccordionItem>
            <AccordionItem title='Second accordion item'>
              Content for the second accordion
            </AccordionItem>
          </Accordion>
          <Form
            fields={[
              'username',
              'age',
              'date',
              'content',
              'framework',
              'framework-multi',
              'framework-images',
              'color',
              'car',
              'switches',
              'range',
              'image',
              'multiImage',
              'people',
              'published',
              'switch',
            ]}
            required={['username', 'age', 'framework-images']}
          >
            <Input
              name='username'
              label='User name'
              placeholder='Enter username'
              initialValue='Michal'
              help='Required field'
              inlineLabel
              large
              min={4}
            />
            <Input
              name='age'
              label='Age'
              type='number'
              placeholder='Enter username'
              help='A longer, very describtive helper text'
              inlineLabel
              large
            />
            <Input
              name='date'
              label='Date'
              type='date'
              inlineLabel
              large
              noBottomGutter
            />
            <TextArea
              name='content'
              // label='Content'
              placeholder='Enter content'
              inlineLabel
              large
              min={15}
              addon={<Icon type='search' />}
            />
            <MultiFormInput
              name='people'
              label='People'
              form={PeopleForm}
              // moreComponent={Button}
              moreComponentProps={{ variant: 'link' }}
              moreLabel='Add new person'
              variant='link'
              inlineLabel
              initialValue={[{ firstname: 'Michal', lastname: 'Kokocinski' }]}
              large
            />
            <FormRow mobile>
              <Select
                name='framework'
                label='Select a Framework'
                options={[
                  { label: 'React', value: 'react' },
                  { label: 'Vue a very very long option label. Vue a very very long option label.', value: 'vue' },
                  { label: 'Angluar', value: 'angluar' },
                ]}
                initialValue={this.state.framework}
                help='Select from the list'
                inlineLabel
                large
              />
              <MultiSelect
                name='framework-multi'
                label='Select Frameworks'
                placeholder='Pick any'
                options={[
                  { label: 'React', value: 'react' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Angluar', value: 'angluar' },
                ]}
                help='Select from the list'
                inlineLabel
                large
                initialValue={['react']}
              />
            </FormRow>
            <ImageSelect
              name='framework-images'
              label='Select Frameworks'
              options={[
                { image: 'https://placehold.it/20x20', value: 'react' },
                { image: 'https://placehold.it/20x20', value: 'vue' },
                { image: 'https://placehold.it/20x20', value: 'angluar' },
              ]}
              multiple
              help='Select from the list'
              inlineLabel
              large
            />
            <Checkbox
              name='published'
              label='Published'
              text='Publish this content'
              small
              inlineLabel
            />
            <Switch
              name='switch'
              label='Switch'
              text='Content for switch'
              inlineLabel
            />
            <Checkboxes
              name='car'
              label='Select cars'
              options={[
                { label: 'Toyota', value: 'toyota' },
                { label: 'Renault', value: 'renault' },
                { label: 'Volkswagen', value: 'volkswagen' },
              ]}
              help='You can pick a few'
              inlineLabel
            />
            <Switches
              name='switches'
              label='Switches'
              options={[
                { label: 'Toyota', value: 'toyota' },
                { label: 'Renault', value: 'renault' },
                { label: 'Volkswagen', value: 'volkswagen' },
              ]}
              help='You can pick a few'
              inlineLabel
            />
            <Radio
              name='color'
              label='Pick a color'
              options={[
                { label: 'Red', value: 'red' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Blue', value: 'blue' },
              ]}
              help='Choose one'
              inline
              large
              inlineLabel
            />
            <Slider
              name='range'
              label='Select amount'
              help='Select amount between range'
              step={10}
              large
              inlineLabel
            />
            <ImageUpload
              name='image'
              label='Upload graphic'
              inlineLabel
              initialValue='https://placehold.it/1139x752'
            />
            <MultiImageUpload
              name='multiImage'
              label='Upload image'
              inlineLabel
            />
            <FormActions>
              <FormButton reset>Reset</FormButton>
              <FormButton
                callback={fields => console.log(fields)}
                // component={Button}
              >Submit</FormButton>
            </FormActions>
          </Form>
          <Button
            onClick={() => this.setState({
              framework: 'react',
            })}
          >Change framework to React</Button>
          <Tabs labels={['First', 'Second', 'Third']}>
            {[
              <div key='1'>Content of the first tab</div>,
              <div key='2'>Content of the second tab</div>,
              <div key='3'>Content of the third tab</div>,
            ]}
          </Tabs>
          {/*
          <Dropdown overlay links={[
            {
              label: 'Profile',
              url: '#',
            },
            {
              label: 'Settings',
              url: '#',
            },
            {
              label: 'Log out',
              url: '#',
            },
          ]}>Toggle dropdown</Dropdown>
          <SocialLinks url={window.location.href} />
          <Rating value={1} />
          <ProgressBar percentage={45} /> */}
          <NavHorizontal links={[
            {
              label: 'Home',
              url: '/',
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
          {/* <NavSubway links={[
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
            size='lg'
            title='Modal title'
            trigger={<Button variant='primary'>Open modal</Button>}
            // isOpen
          >
            Modal content
          </Modal>
          <Logo />
          <Breadcrumb items={['Docs', 'Components API', 'Button']} />
          <ListingItem
            id='12345'
            title='Featured article name'
            date='16 October 2018'
            description='Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
            mediaUrl='http://placehold.it/200x145'
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
            current='English'
          />
          <Alert message='Example message' type='success' />
          <Stepper
            steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
            current={2}
          />
          */}
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
          {/*
          <div>Test<Badge number={7} /></div>
          <div><Icon type='bell' /><Badge number={7} /></div>
          <Field label='Field label' spacing values={[
            'Multiple value',
            'Another value',
            'Third value',
          ]} />
          <Field label='Field label' large>Single value</Field>
          <Parallax>
            <ParallaxGroup className='parallax__demo-solid'>
              <div className='parallax_demo-title'>Solid base layer</div>
            </ParallaxGroup>
            <ParallaxGroup backLayer={
              <Fragment>
                <img className='full-width' src='https://placeimg.com/640/480/nature' alt='' />
                <div className='parallax_demo-title'>Back layer</div>
              </Fragment>
            }>
              <div className='parallax_demo-title'>Transparent base layer</div>
            </ParallaxGroup>
            <ParallaxGroup className='parallax__demo-solid'>
              <div className='parallax_demo-title'>Solid base layer</div>
            </ParallaxGroup>
            <ParallaxGroup className='parallax__demo-solid'>
              <div className='parallax_demo-title'>Solid base layer</div>
            </ParallaxGroup>
          </Parallax>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </FormThemeProvider>
    )
  }
}

export default App


const PeopleForm = ({ fields, onChange }) =>
  <Form
    fields={['firstname', 'lastname']}
    onChange={udpatedFields => onChange(udpatedFields)}
    runOnChangeInitially
  >
    <FormRow>
      <Input
        name='firstname'
        label='First name'
        initialValue={fields.firstname}
      />
      <Input
        name='lastname'
        label='Last name'
        initialValue={fields.lastname}
      />
    </FormRow>
  </Form>
