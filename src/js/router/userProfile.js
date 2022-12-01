import { displayProfileInformation } from '../ui/dashboardDisplay';
import { UserProfile } from '../api/user/userProfile';

export const displayUserDetails = new UserProfile(displayProfileInformation);
