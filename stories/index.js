import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import '../src/style/index.sass'

import DocsDeploymentStatic from '../src/pages/DocsDeploymentStatic'
import DocsDeploymentJekyll from '../src/pages/DocsDeploymentJekyll'
import DocsDeploymentReact from '../src/pages/DocsDeploymentReact'
import DocsDeploymentNext from '../src/pages/DocsDeploymentNext'
import DocsDesigns from '../src/pages/DocsDesigns'
import DocsContribution from '../src/pages/DocsContribution'
import DocsFileStructureStatic from '../src/pages/DocsFileStructureStatic'
import DocsFileStructureJekyll from '../src/pages/DocsFileStructureJekyll'
import DocsFileStructureReact from '../src/pages/DocsFileStructureReact'
import DocsFileStructureNext from '../src/pages/DocsFileStructureNext'
import DocsFirstPage from '../src/pages/DocsFirstPage'
import DocsProjectSetupStatic from '../src/pages/DocsProjectSetupStatic'
import DocsProjectSetupJekyll from '../src/pages/DocsProjectSetupJekyll'
import DocsProjectSetupReact from '../src/pages/DocsProjectSetupReact'
import DocsProjectSetupNext from '../src/pages/DocsProjectSetupNext'
import DocsFurther from '../src/pages/DocsFurther'
import DocsIntroduction from '../src/pages/DocsIntroduction'
import DocsRequirements from '../src/pages/DocsRequirements'
import DocsThery from '../src/pages/DocsThery'
import BasicStyles from '../src/pages/BasicStyles'
import BasicStylesREADME from '../src/pages/BasicStylesREADME.md'

import AccordionEXAMPLE from '../src/components/Accordion/EXAMPLE'
import AccordionREADME from '../src/components/Accordion/README.md'
import ActionLinksEXAMPLE from '../src/components/ActionLinks/EXAMPLE'
import ActionLinksREADME from '../src/components/ActionLinks/README.md'
import AlertEXAMPLE from '../src/components/Alert/EXAMPLE'
import AlertREADME from '../src/components/Alert/README.md'
import AvatarEXAMPLE from '../src/components/Avatar/EXAMPLE'
import AvatarREADME from '../src/components/Avatar/README.md'
import BadgeEXAMPLE from '../src/components/Badge/EXAMPLE'
import BadgeREADME from '../src/components/Badge/README.md'
import BlockEXAMPLE from '../src/components/Block/EXAMPLE'
import BlockREADME from '../src/components/Block/README.md'
import BreadcrumbEXAMPLE from '../src/components/Breadcrumb/EXAMPLE'
import BreadcrumbREADME from '../src/components/Breadcrumb/README.md'
import ButtonEXAMPLE from '../src/components/Button/EXAMPLE'
import ButtonREADME from '../src/components/Button/README.md'
import CloudletEXAMPLE from '../src/components/Cloudlet/EXAMPLE'
import CloudletREADME from '../src/components/Cloudlet/README.md'
import DonutEXAMPLE from '../src/components/Donut/EXAMPLE'
import DonutREADME from '../src/components/Donut/README.md'
import DropdownEXAMPLE from '../src/components/Dropdown/EXAMPLE'
import DropdownREADME from '../src/components/Dropdown/README.md'
import FieldEXAMPLE from '../src/components/Field/EXAMPLE'
import FieldREADME from '../src/components/Field/README.md'
import Form from '../src/components/Form'
import FormREADME from '../src/components/Form/README.md'
import FullscreenBoxEXAMPLE from '../src/components/FullscreenBox/EXAMPLE'
import FullscreenBoxREADME from '../src/components/FullscreenBox/README.md'
import GridEXAMPLE from '../src/components/Grid/EXAMPLE'
import GridREADME from '../src/components/Grid/README.md'
import HamburgerNavEXAMPLE from '../src/components/HamburgerNav/EXAMPLE'
import HamburgerNavREADME from '../src/components/HamburgerNav/README.md'
import IconEXAMPLE from '../src/components/Icon/EXAMPLE'
import IconREADME from '../src/components/Icon/README.md'
import InfoBoxEXAMPLE from '../src/components/InfoBox/EXAMPLE'
import InfoBoxREADME from '../src/components/InfoBox/README.md'
import LanguageSelectEXAMPLE from '../src/components/LanguageSelect/EXAMPLE'
import LanguageSelectREADME from '../src/components/LanguageSelect/README.md'
import ListingItemEXAMPLE from '../src/components/ListingItem/EXAMPLE'
import ListingItemREADME from '../src/components/ListingItem/README.md'
import LoaderEXAMPLE from '../src/components/Loader/EXAMPLE'
import LoaderREADME from '../src/components/Loader/README.md'
import LogoEXAMPLE from '../src/components/Logo/EXAMPLE'
import LogoREADME from '../src/components/Logo/README.md'
import ModalEXAMPLE from '../src/components/Modal/EXAMPLE'
import ModalREADME from '../src/components/Modal/README.md'
import NavHorizontalEXAMPLE from '../src/components/NavHorizontal/EXAMPLE'
import NavHorizontalREADME from '../src/components/NavHorizontal/README.md'
import NavVerticalEXAMPLE from '../src/components/NavVertical/EXAMPLE'
import NavVerticalREADME from '../src/components/NavVertical/README.md'
import NavSubwayEXAMPLE from '../src/components/NavSubway/EXAMPLE'
import NavSubwayREADME from '../src/components/NavSubway/README.md'
import OwlCarouselEXAMPLE from '../src/components/OwlCarousel/EXAMPLE'
import OwlCarouselREADME from '../src/components/OwlCarousel/README.md'
import PaginationEXAMPLE from '../src/components/Pagination/EXAMPLE'
import PaginationREADME from '../src/components/Pagination/README.md'
import ParallaxEXAMPLE from '../src/components/Parallax/EXAMPLE'
import ParallaxREADME from '../src/components/Parallax/README.md'
import ProgressBarEXAMPLE from '../src/components/ProgressBar/EXAMPLE'
import ProgressBarREADME from '../src/components/ProgressBar/README.md'
import RatingEXAMPLE from '../src/components/Rating/EXAMPLE'
import RatingREADME from '../src/components/Rating/README.md'
import SectionEXAMPLE from '../src/components/Section/EXAMPLE'
import SectionREADME from '../src/components/Section/README.md'
import SmartphoneWrapperEXAMPLE from '../src/components/SmartphoneWrapper/EXAMPLE'
import SmartphoneWrapperREADME from '../src/components/SmartphoneWrapper/README.md'
import SocialLinksEXAMPLE from '../src/components/SocialLinks/EXAMPLE'
import SocialLinksREADME from '../src/components/SocialLinks/README.md'
import SocialSignUpEXAMPLE from '../src/components/SocialSignUp/EXAMPLE'
import SocialSignUpREADME from '../src/components/SocialSignUp/README.md'
import SpinnerEXAMPLE from '../src/components/Spinner/EXAMPLE'
import SpinnerREADME from '../src/components/Spinner/README.md'
import StepperEXAMPLE from '../src/components/Stepper/EXAMPLE'
import StepperREADME from '../src/components/Stepper/README.md'
import TableEXAMPLE from '../src/components/Table/EXAMPLE'
import TableREADME from '../src/components/Table/README.md'
import TabsEXAMPLE from '../src/components/Tabs/EXAMPLE'
import TabsREADME from '../src/components/Tabs/README.md'
import TagsEXAMPLE from '../src/components/Tags/EXAMPLE'
import TagsREADME from '../src/components/Tags/README.md'
import TooltipEXAMPLE from '../src/components/Tooltip/EXAMPLE'
import TooltipREADME from '../src/components/Tooltip/README.md'
import TopBarEXAMPLE from '../src/components/TopBar/EXAMPLE'
import TopBarREADME from '../src/components/TopBar/README.md'

addDecorator(storyFn => (
  <div style={{ padding: '20px' }}>
    {storyFn()}
  </div>
))

storiesOf('Docs/Introduction', module)
  .add('Read', () => <DocsIntroduction />)

storiesOf('Docs/Theory of good HTML and CSS', module)
  .add('Read', () => <DocsThery />)

storiesOf('Docs/Requirements', module)
  .add('Read', () => <DocsRequirements />)

storiesOf('Docs/First project setup', module)
  .add('Static site', () => <DocsProjectSetupStatic />)
  .add('Jekyll', () => <DocsProjectSetupJekyll />)
  .add('React', () => <DocsProjectSetupReact />)
  .add('Next', () => <DocsProjectSetupNext />)

storiesOf('Docs/File structure', module)
  .add('Static site', () => <DocsFileStructureStatic />)
  .add('Jekyll', () => <DocsFileStructureJekyll />)
  .add('React', () => <DocsFileStructureReact />)
  .add('Next', () => <DocsFileStructureNext />)

storiesOf('Docs/Recognition of designs', module)
  .add('Read', () => <DocsDesigns />)

storiesOf('Docs/Coding first page', module)
  .add('Read', () => <DocsFirstPage />)

storiesOf('Docs/Further coding', module)
  .add('Read', () => <DocsFurther />)

storiesOf('Docs/Deployment', module)
  .add('Static', () => <DocsDeploymentStatic />)
  .add('Jekyll', () => <DocsDeploymentJekyll />)
  .add('React', () => <DocsDeploymentReact />)
  .add('Next', () => <DocsDeploymentNext />)

storiesOf('Docs/Contribution', module)
  .add('Read', () => <DocsContribution />)

storiesOf('Components/Basic styles', module)
  .addParameters({ readme: { sidebar: BasicStylesREADME } })
  .add('default', () => <BasicStyles />)

storiesOf('Components/Accordion', module)
  .addParameters({ readme: { sidebar: AccordionREADME } })
  .add('default', () => <AccordionEXAMPLE />)

storiesOf('Components/ActionLinks', module)
  .addParameters({ readme: { sidebar: ActionLinksREADME } })
  .add('default', () => <ActionLinksEXAMPLE />)

storiesOf('Components/Alert', module)
  .addParameters({ readme: { sidebar: AlertREADME } })
  .add('default', () => <AlertEXAMPLE />)
  .add('success', () => <AlertEXAMPLE type='success' />)
  .add('warning', () => <AlertEXAMPLE type='warning' />)
  .add('error', () => <AlertEXAMPLE type='error' />)

storiesOf('Components/Avatar', module)
  .addParameters({ readme: { sidebar: AvatarREADME } })
  .add('default', () => <AvatarEXAMPLE />)
  .add('sm', () => <AvatarEXAMPLE size='sm' />)
  .add('lg', () => <AvatarEXAMPLE size='lg' />)

storiesOf('Components/Badge', module)
  .addParameters({ readme: { sidebar: BadgeREADME } })
  .add('default', () => <BadgeEXAMPLE />)

storiesOf('Components/Block', module)
  .addParameters({ readme: { sidebar: BlockREADME } })
  .add('default', () => <BlockEXAMPLE />)

storiesOf('Components/Breadcrumb', module)
  .addParameters({ readme: { sidebar: BreadcrumbREADME } })
  .add('default', () => <BreadcrumbEXAMPLE />)

storiesOf('Components/Button', module)
  .addParameters({ readme: { sidebar: ButtonREADME } })
  .add('default', () => <ButtonEXAMPLE />)
  .add('primary', () => <ButtonEXAMPLE variant='primary' />)
  .add('secondary', () => <ButtonEXAMPLE variant='secondary' />)
  .add('danger', () => <ButtonEXAMPLE variant='danger' />)
  .add('success', () => <ButtonEXAMPLE variant='success' />)
  .add('warning', () => <ButtonEXAMPLE variant='warning' />)
  .add('link', () => <ButtonEXAMPLE variant='link' />)

storiesOf('Components/Cloudlet', module)
  .addParameters({ readme: { sidebar: CloudletREADME } })
  .add('default', () => <CloudletEXAMPLE />)

storiesOf('Components/Donut', module)
  .addParameters({ readme: { sidebar: DonutREADME } })
  .add('default', () => <DonutEXAMPLE />)
  .add('pie', () => <DonutEXAMPLE pie />)

storiesOf('Components/Dropdown', module)
  .addParameters({ readme: { sidebar: DropdownREADME } })
  .add('default', () => <DropdownEXAMPLE />)

storiesOf('Components/Field', module)
  .addParameters({ readme: { sidebar: FieldREADME } })
  .add('default', () => <FieldEXAMPLE />)
  .add('inlineLabel', () => <FieldEXAMPLE inlineLabel />)


storiesOf('Components/Form', module)
  .addParameters({ readme: { sidebar: FormREADME } })
  .add('default', () => <Form />)

storiesOf('Components/FullscreenBox', module)
  .addParameters({ readme: { sidebar: FullscreenBoxREADME } })
  .add('default', () => <FullscreenBoxEXAMPLE />)

storiesOf('Components/Grid', module)
  .addParameters({ readme: { sidebar: GridREADME } })
  .add('default', () => <GridEXAMPLE />)

storiesOf('Components/HamburgerNav', module)
  .addParameters({ readme: { sidebar: HamburgerNavREADME } })
  .add('default', () => <HamburgerNavEXAMPLE />)

storiesOf('Components/Icon', module)
  .addParameters({ readme: { sidebar: IconREADME } })
  .add('default', () => <IconEXAMPLE />)

storiesOf('Components/InfoBox', module)
  .addParameters({ readme: { sidebar: InfoBoxREADME } })
  .add('default', () => <InfoBoxEXAMPLE />)

storiesOf('Components/LanguageSelect', module)
  .addParameters({ readme: { sidebar: LanguageSelectREADME } })
  .add('default', () => <LanguageSelectEXAMPLE />)

storiesOf('Components/ListingItem', module)
  .addParameters({ readme: { sidebar: ListingItemREADME } })
  .add('default', () => <ListingItemEXAMPLE />)

storiesOf('Components/Loader', module)
  .addParameters({ readme: { sidebar: LoaderREADME } })
  .add('default', () => <LoaderEXAMPLE />)

storiesOf('Components/Logo', module)
  .addParameters({ readme: { sidebar: LogoREADME } })
  .add('default', () => <LogoEXAMPLE />)

storiesOf('Components/Modal', module)
  .addParameters({ readme: { sidebar: ModalREADME } })
  .add('default', () => <ModalEXAMPLE />)
  .add('xs', () => <ModalEXAMPLE size='xs' />)
  .add('sm', () => <ModalEXAMPLE size='sm' />)
  .add('lg', () => <ModalEXAMPLE size='lg' />)

storiesOf('Components/NavHorizontal', module)
  .addParameters({ readme: { sidebar: NavHorizontalREADME } })
  .add('default', () => <NavHorizontalEXAMPLE />)

storiesOf('Components/NavVertical', module)
  .addParameters({ readme: { sidebar: NavVerticalREADME } })
  .add('default', () => <NavVerticalEXAMPLE />)

storiesOf('Components/NavSubway', module)
  .addParameters({ readme: { sidebar: NavSubwayREADME } })
  .add('default', () => <NavSubwayEXAMPLE />)

storiesOf('Components/OwlCarousel', module)
  .addParameters({ readme: { sidebar: OwlCarouselREADME } })
  .add('default', () => <OwlCarouselEXAMPLE />)

storiesOf('Components/Pagination', module)
  .addParameters({ readme: { sidebar: PaginationREADME } })
  .add('default', () => <PaginationEXAMPLE />)

storiesOf('Components/Parallax', module)
  .addParameters({ readme: { sidebar: ParallaxREADME } })
  .add('default', () => <ParallaxEXAMPLE />)
  .add('debug', () => <ParallaxEXAMPLE debug />)

storiesOf('Components/ProgressBar', module)
  .addParameters({ readme: { sidebar: ProgressBarREADME } })
  .add('default', () => <ProgressBarEXAMPLE />)

storiesOf('Components/Rating', module)
  .addParameters({ readme: { sidebar: RatingREADME } })
  .add('default', () => <RatingEXAMPLE />)

storiesOf('Components/Section', module)
  .addParameters({ readme: { sidebar: SectionREADME } })
  .add('default', () => <SectionEXAMPLE />)

storiesOf('Components/SmartphoneWrapper', module)
  .addParameters({ readme: { sidebar: SmartphoneWrapperREADME } })
  .add('default', () => <SmartphoneWrapperEXAMPLE />)

storiesOf('Components/SocialLinks', module)
  .addParameters({ readme: { sidebar: SocialLinksREADME } })
  .add('default', () => <SocialLinksEXAMPLE />)

storiesOf('Components/SocialSignUp', module)
  .addParameters({ readme: { sidebar: SocialSignUpREADME } })
  .add('default', () => <SocialSignUpEXAMPLE />)

storiesOf('Components/Spinner', module)
  .addParameters({ readme: { sidebar: SpinnerREADME } })
  .add('default', () => <SpinnerEXAMPLE />)

storiesOf('Components/Stepper', module)
  .addParameters({ readme: { sidebar: StepperREADME } })
  .add('default', () => <StepperEXAMPLE />)

storiesOf('Components/Tabs', module)
  .addParameters({ readme: { sidebar: TabsREADME } })
  .add('default', () => <TabsEXAMPLE />)

storiesOf('Components/Table', module)
  .addParameters({ readme: { sidebar: TableREADME } })
  .add('default', () => <TableEXAMPLE />)

storiesOf('Components/Tags', module)
  .addParameters({ readme: { sidebar: TagsREADME } })
  .add('default', () => <TagsEXAMPLE />)

storiesOf('Components/Tooltip', module)
  .addParameters({ readme: { sidebar: TooltipREADME } })
  .add('default', () => <TooltipEXAMPLE />)

storiesOf('Components/TopBar', module)
  .addParameters({ readme: { sidebar: TopBarREADME } })
  .add('default', () => <TopBarEXAMPLE />)
