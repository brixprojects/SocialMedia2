import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import "./ProfileSide.css"
import ProfileCard from '../ProfileCard.jsx/ProfileCard';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSide
