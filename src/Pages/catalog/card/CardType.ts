interface Organization {
  title: string;
  isVerified: boolean;
}

interface ActionSchedule {
  stepLabel: string;
  isDone?: boolean;
}

interface Location {
  latitude: number;
  longitude: number;
  district: string;
  city: string;
}

interface Contacts {
  email: string;
  phone: string;
  website: string;
}

interface HelperRequirements {
  helperType: string;
  isOnline: boolean;
  qualification: string;
}

interface CardType {
  id: string;
  title: string;
  organization: Organization;
  description: string;
  goalDescription: string;
  actionsSchedule: ActionSchedule[];
  endingDate: string;
  location: Location;
  contacts: Contacts;
  requesterType: string;
  helpType: string;
  helperRequirements: HelperRequirements;
  contributorsCount: number;
  requestGoal: number;
  requestGoalCurrentValue: number;
}

export default CardType;
