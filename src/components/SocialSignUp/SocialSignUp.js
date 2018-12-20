import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const SocialSignUp = ({ label }) =>
  <div className='social-sign-up'>
    <div className='social-sign-up__label'>{label}</div>
    <div className={bemCx('social-sign-up__button', 'facebook')} onClick={() => alert('Facebook auth action')}>
      <FacebookIcon />Login with Facebook
    </div>
    <div className={bemCx('social-sign-up__button', 'google')} onClick={() => alert('Google auth action')}>
      <GoogleIcon />Login with Google
    </div>
  </div>

export default SocialSignUp


const FacebookIcon = () =>
  <svg
    className='social-sign-up__icon'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 216 216'
    width='25'
    height='25'
  >
    <g fill='#ffffff'>
      <path fill=''
        d='
          M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
          11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
          11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
          15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
          11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z' />
    </g>
  </svg>


const GoogleIcon = () =>
  <svg
    className='social-sign-up__icon'
    width='46px'
    height='46px'
    viewBox='0 0 46 46'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='Google-Button' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='btn_google_light_normal' transform='translate(-1, -1)'>
        <g id='logo_googleg_48dp' transform='translate(15, 15)'>
          <path d='M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z' id='Shape' fill='#4285F4' />
          <path d='M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z' fill='#34A853' />
          <path d='M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z' fill='#FBBC05' />
          <path d='M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z' fill='#EA4335' />
        </g>
      </g>
    </g>
  </svg>
