import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoalCard from "../../components/GoalCard/GoalCard";

import * as profileService from '../../services/profileService'

const ProfileView = () => {
  const { id } = useParams()
  const [profile, setProfile] = useState({})

  const handleAddGoal = async (goalData) => {
    const newGoal = await profileService.createGoal(id, goalData)
    setProfile({})
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getOneProfile(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  return (  
    <>
      <h1>{profile.name}'s goals and weekly plan:</h1>
      <h3>I want to:</h3>

    </>
  );
}

export default ProfileView;