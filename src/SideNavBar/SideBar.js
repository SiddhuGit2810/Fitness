import React, { useState } from 'react'

import "./Sidebar.css"
import { useNavigate } from 'react-router-dom';


function SideBar() {

  const nav = useNavigate()

  return (
    <div className="sidebar">
      <div className="top-menubar">
        <div className="brand">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4067 7C21.1267 7 18.4067 7.86667 18.4067 12V20C18.4067 24.1333 21.1267 25 23.4067 25C25.6867 25 28.4067 24.1333 28.4067 20V12C28.4067 7.86667 25.6867 7 23.4067 7ZM9.59333 7C7.31333 7 4.59333 7.86667 4.59333 12V20C4.59333 24.1333 7.31333 25 9.59333 25C11.8733 25 14.5933 24.1333 14.5933 20V12C14.5933 7.86667 11.8733 7 9.59333 7ZM18.4067 15H14.5933V17H18.4067V15ZM30.5 20.3333C29.9533 20.3333 29.5 19.88 29.5 19.3333V12.6667C29.5 12.12 29.9533 11.6667 30.5 11.6667C31.0467 11.6667 31.5 12.12 31.5 12.6667V19.3333C31.5 19.88 31.0467 20.3333 30.5 20.3333ZM2.5 20.3333C1.95333 20.3333 1.5 19.88 1.5 19.3333V12.6667C1.5 12.12 1.95333 11.6667 2.5 11.6667C3.04667 11.6667 3.5 12.12 3.5 12.6667V19.3333C3.5 19.88 3.04667 20.3333 2.5 20.3333Z" fill="#F97316" />
          </svg>

          <h2>Fitness Freaks</h2>
        </div>
      </div>
      <hr />
      <ul className="menu">
        <li className="menu-item" onClick={() => nav('/HomePage')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.82 12H14.18M22.5 14.5V9.5M1.5 14.5V9.5M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18ZM6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Workout</li>
        <li className="menu-item"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.93 6.75999L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8355 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.54999C5.45068 5.09149 5.73419 4.68993 6.11915 4.40391C6.50412 4.11788 6.97042 3.96234 7.45001 3.95999H19.75C20.7 3.95999 21.49 4.53999 21.82 5.33999C22.01 5.76999 22.05 6.25999 21.93 6.75999Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
          <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 5.99999M9.68 6.37999L10.72 2.05999M16.38 6.38999L17.32 2.04999M7.7 12H15.7M6.7 16H14.7" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Diet</li>
        <li className="menu-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22H22" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4ZM3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10ZM17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> Progress</li>
        <li className="menu-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.29401 13.7H8.30401M8.29401 16.7H8.30401" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg> My Schedule</li>
      </ul>
      <div className="footer-menu">
        <hr />
        <ul>
          <li className="footer-menu-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9 7.55999C9.21 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54M15 12H3.62M5.85 8.64999L2.5 12L5.85 15.35" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg> Logout</li>
          <li className="footer-menu-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" fill="#475569" />
          </svg> Help</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar