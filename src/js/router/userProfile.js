import { displayProfileInformation } from '../ui/dashboardDisplay.js';
import { UserProfile } from '../api/user/userProfile.js';

export const displayUserDetails = new UserProfile(displayProfileInformation);
