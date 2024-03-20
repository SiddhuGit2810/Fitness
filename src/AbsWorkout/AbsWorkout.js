import React from "react";
import './AbsWorkout.css'

function AbsWorkout() {
    return (

        <div className="container">
            <div className="Abs-card">
                <div className="card-header">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="4" fill="#0891B2" />
                        <path d="M20.0933 23H25.9067M37 26.3333V19.6667M9 26.3333V19.6667M29.9067 31C33.1067 31 33.9067 29.2 33.9067 27V19C33.9067 16.8 33.1067 15 29.9067 15C26.7067 15 25.9067 16.8 25.9067 19V27C25.9067 29.2 26.7067 31 29.9067 31ZM16.0933 31C12.8933 31 12.0933 29.2 12.0933 27V19C12.0933 16.8 12.8933 15 16.0933 15C19.2933 15 20.0933 16.8 20.0933 19V27C20.0933 29.2 19.2933 31 16.0933 31Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h2>Chest Workout</h2>
                </div>
                <div className="card-body">
                    {/* Your card body content here */}
                </div>
            </div>
        </div>
    )
}

export default AbsWorkout