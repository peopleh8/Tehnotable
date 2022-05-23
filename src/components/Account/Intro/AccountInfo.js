import React, { useState, useEffect } from 'react'

import InputMask from "react-input-mask";

import { isBrowser } from '../../../utils/isBrowser'
import { encryptPassword } from '../../../utils/encryptPassword'

const AccountInfo = () => {
  let [ isEdit, setIsEdit ] = useState(false)

  let [ name, setName ] = useState('Andrew')
  let [ lastName, setLastName ] = useState('Fesun')
  let [ middleName, setMiddleName ] = useState('-')

  let [ password, setPassword ] = useState('123431576')
  let [ decryptedPassword, setDecryptedPassword ] = useState('')

  let [ phone, setPhone ] = useState('')
  let [ email, setEmail ] = useState('mail@test.com')
  let [ birthday, setBirthday ] = useState('')

  useEffect(() => {
    setDecryptedPassword(password)
    setPassword(encryptPassword(password))

    checkFields(name, setName, lastName, setLastName, middleName, setMiddleName, phone, setPhone, email, setEmail, birthday, setBirthday)
  }, [])

  const checkFields = (name, setName, lastName, setLastName, middleName, setMiddleName, phone, setPhone, email, setEmail, birthday, setBirthday) => {
    !name ? setName('-') : setName(name)
    !lastName ? setLastName('-') : setLastName(lastName)
    !middleName ? setMiddleName('-') : setMiddleName(middleName)
    !phone || phone === '+380 (__) ___-__-__' ? setPhone('-') : setPhone(phone)
    !email ? setEmail('-') : setEmail(email)
    !birthday || birthday === '__/__/____' ? setBirthday('-') : setBirthday(birthday)
  }

  const editInfo = event => {
    setIsEdit(true)

    let target = event.currentTarget

    target.parentElement.classList.add('fade')

    checkFields(name, setName, lastName, setLastName, middleName, setMiddleName, phone, setPhone, email, setEmail, birthday, setBirthday)

    if (isEdit) {
      setPassword(encryptPassword(password))

      if (isBrowser()) {
        setTimeout(() => {
          target.textContent = target.dataset.editText
        }, 200)

        setTimeout(() => {
          target.parentElement.classList.remove('fade')
        }, 210)
      }

      setIsEdit(false)
    } else {
      setPassword(decryptedPassword)

      if (isBrowser()) {
        setTimeout(() => {
          target.textContent = target.dataset.saveText
        }, 200)

        setTimeout(() => {
          target.parentElement.classList.remove('fade')
        }, 210)
      }
    }
  }

  return (
    <div className="account-intro-tabs__content-info">
      <div className="account-intro-tabs__content-inner">
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-name">Your name</label>
            <div
              className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}
              style={{ transitionDelay: '0s' }}
            >
              <input
                className="account-intro-tabs__content-elem-value"
                id="account-name"
                name="name"
                type="text"
                autoComplete="off"
                value={name}
                onChange={e => setName(e.currentTarget.value.trim())}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-phone">Phone</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <InputMask
                className="account-intro-tabs__content-elem-value"
                mask="+380 (99) 999-99-99"
                maskPlaceholder={null}
                alwaysShowMask={true}
                name="phone"
                type="tel"
                id="account-phone"
                autoComplete="off"
                value={phone}
                onChange={e => setPhone(e.currentTarget.value)}
                hidden={!isEdit}
              />
              <input
                type="text"
                name="phone-hidden"
                autoComplete="off"
                value={phone}
                onChange={e => setPhone(e.currentTarget.value)}
                hidden={isEdit}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-last-name">Last name</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <input
                className="account-intro-tabs__content-elem-value"
                name="last-name"
                type="text"
                id="account-last-name"
                autoComplete="off"
                value={lastName}
                onChange={e => setLastName(e.currentTarget.value.trim())}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-email">Email</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <input
                className="account-intro-tabs__content-elem-value"
                name="email"
                type="text"
                id="account-email"
                autoComplete="off"
                value={email}
                onChange={e => setEmail(e.currentTarget.value.trim())}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-mid-name">Middle name</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <input
                className="account-intro-tabs__content-elem-value"
                name="mid-name"
                type="text"
                id="account-mid-name"
                autoComplete="off"
                value={middleName}
                onChange={e => setMiddleName(e.currentTarget.value.trim())}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-birthday">Date of birth</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <InputMask
                className="account-intro-tabs__content-elem-value"
                mask="99/99/9999"
                maskPlaceholder={null}
                alwaysShowMask={true}
                name="birthday"
                type="text"
                id="account-birthday"
                autoComplete="off"
                value={birthday}
                onChange={e => setBirthday(e.currentTarget.value)}
                hidden={!isEdit}
              />
              <input
                type="text"
                name="birthday-hidden"
                autoComplete="off"
                value={birthday}
                onChange={e => setBirthday(e.currentTarget.value)}
                hidden={isEdit}
              />
            </div>
          </div>
        </div>
        <div className="account-intro-tabs__content-elem">
          <div className="account-intro-tabs__content-elem-inner">
            <label className="account-intro-tabs__content-elem-title" htmlFor="account-password">Password</label>
            <div className={`account-intro-tabs__content-elem-value-wrapper ${isEdit ? 'edit' : ''}`}>
              <input
                className="account-intro-tabs__content-elem-value"
                name="password"
                type="text"
                id="account-password"
                autoComplete="off"
                value={password}
                onChange={e => {
                  setPassword(e.currentTarget.value)
                  setDecryptedPassword(e.currentTarget.value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="account-intro-tabs__content-btn-wrapper">
        <button
          className={
            `account-intro-tabs__content-btn 
            ${!decryptedPassword || !email  ? 'disabled' : ''}`
          }
          type="button"
          data-edit-text="Edit"
          data-save-text="Save"
          onClick={editInfo}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default AccountInfo