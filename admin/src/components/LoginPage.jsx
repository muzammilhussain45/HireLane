import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Mail, Lock, Eye, EyeOff, LogIn, CheckCircle, AlertCircle, X } from 'lucide-react'
import { loginPageStyles as s } from '../assets/dummyStyles'

import BACKEND_URL from '../config'


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' })

  const navigate = useNavigate()

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, message: '', type: 'success' })
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  // to submit the data and logged in

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setToast({ visible: true, message: 'Please fill all the fields', type: 'error' })
      return
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/auth/login`, { email, password })

      if (response.data.user.role !== 'admin') {
        setToast({ visible: true, message: 'Access denied', type: 'error' })
        return
      }

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      setToast({ visible: true, message: 'Login successful', type: 'success' })
      setTimeout(() => navigate('/'), 1500)
    } catch (err) {
      setToast({ visible: true, message: 'Invalid email or password', type: 'error' })
    }
  }

  const closeToast = () => setToast({ visible: false, message: '', type: 'success' })

  const toastIcon = toast.type === 'success'
    ? <CheckCircle className={s.toastIconSuccess} size={20} />
    : <AlertCircle className={s.toastIconError} size={20} />

  const toastBorderColor = toast.type === 'success' ? s.toastBorderSuccess : s.toastBorderError

  return (
    <div className={s.pageContainer}>

      {toast.visible && (
        <div className={`${s.toastContainer} ${toastBorderColor}`} role='alert'>
          {toastIcon}
          <p className={s.toastMessage}>{toast.message}</p>
          <button onClick={closeToast} className={s.toastCloseBtn}>
            <X size={18} />
          </button>
        </div>
      )}

      <div className={s.card}>
        <div className={s.header}>
          <h1 className={s.title}>Admin Panel</h1>
          <p className={s.subtitle}>HireLane Administration</p>
        </div>

        <form onSubmit={handleSubmit} className={s.form}>

          {/* email */}
          <div className={s.formGroup}>
            <label htmlFor='email' className={s.label}>Email address</label>
            <div className={s.inputWrapper}>
              <div className={s.iconWrapper}>
                <Mail className={s.iconDefault} size={18} />
              </div>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${s.inputBase} ${s.inputPr3}`}
                placeholder='admin@hirelane.com'
                required
              />
            </div>
          </div>

          {/* password */}
          <div className={s.formGroup}>
            <label htmlFor='password' className={s.label}>Password</label>
            <div className={s.inputWrapper}>
              <div className={s.iconWrapper}>
                <Lock className={s.iconDefault} size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${s.inputBase} ${s.inputPr12}`}
                placeholder='........'
                required
              />

              {/* toggle eye password  */}
              <div className={s.eyeButtonWrapper}>
                <button type='button' onClick={() => setShowPassword((v) => !v)} className={s.eyeButton}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <button type='submit' className={s.submitBtn}>
            <LogIn size={18} className={s.submitIcon} />
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
