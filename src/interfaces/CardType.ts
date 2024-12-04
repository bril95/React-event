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

interface CardInfoProps {
  card: CardType;
}

const initialCard: CardType = {
  id: '',
  title: '',
  organization: { title: '', isVerified: false },
  description: '',
  goalDescription: '',
  actionsSchedule: [],
  endingDate: '',
  location: { district: '', city: '', latitude: 0, longitude: 0 },
  contacts: { email: '', phone: '', website: '' },
  requesterType: '',
  helpType: '',
  helperRequirements: { helperType: '', isOnline: false, qualification: '' },
  contributorsCount: 0,
  requestGoal: 0,
  requestGoalCurrentValue: 0,
};

export {initialCard}

export default CardInfoProps;
