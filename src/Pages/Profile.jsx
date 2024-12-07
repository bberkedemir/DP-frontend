import React from 'react';
import './CSS/Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://picsum.photos/id/58/1280/853"
            alt="Profile"
            className="profile-picture"
          />
          <h1 className="profile-name">Berke Demir</h1>
          <p className="profile-email">mail@example.com</p>
        </div>
        <div className="profile-details">
          <h2>Profile Details</h2>
          <div className="profile-info">
            <p><strong>Username:</strong> bberkedemir</p>
            <p><strong>Joined:</strong> 10 December 2024</p>
            <p><strong>Location:</strong> Antalya, Turkey</p>
          </div>
        </div>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
