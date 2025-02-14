import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get('http://localhost:3000/api/auth', {
        headers: { Authorization: "Bearer " + token },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();

  }, []);

  if (!user) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }
  if(user){
    console.log(user)
  }
  return (
    <div>
      
      <Navbar />
      <ProfileWrapper>
      <LogoutButton>Logout</LogoutButton>
      <ProfileContainer>
        <ProfileImage src={`http://localhost:3000/uploads/${user.avatar.url}`} alt={user.name} />
        <ProfileDetails>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          {user.addresses ? (
            <div>
              <p><strong>Address:</strong> <br />
            {user.addresses[0].address1}, {user.addresses[0].address2} <br />
            {user.addresses[0].city} - {user.addresses[0].zipCode}
           </p>
            </div>
          ): (
            <div>
              <p><strong>Address:</strong> <br />
              <p>No Address Found</p>
              </p>
              <Link to={'/add/address'}><button className='primary-btn'>Add Address</button></Link>
            </div>
          )}
          
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

        </ProfileDetails>
      </ProfileContainer>
    </ProfileWrapper>
    </div>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  font-family: 'Poppins', sans-serif;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 30px;
  background-color: white;
  width: 60%;
  max-width: 800px;
  height: 100vh;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid black;
`;

const LogoutButton = styled.button`
  background-color: #fc3b3b;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 12px 20px;
  position: absolute;
  right: 50px;
  top: 100px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #f41c1c;
  }
`;

const ProfileDetails = styled.div`
  text-align: left;
  width: 100%;
  padding: 10px;

  h2 {
    font-size: 1.8rem;
    /* text-align: center; */
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 8px;
  }
  .primary-btn{
    background-color: var(--primary-color);
    color: var(--font-color);
    border: 1px solid black;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #06c44c; 
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #555;
`;

export default Profile;