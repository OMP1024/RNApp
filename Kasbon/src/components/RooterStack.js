import {
  createStackNavigator
} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import IdentityScreen from '../screens/IdentityScreen';
import JobScreen from '../screens/JobScreen';
import LivingScreen from '../screens/LivingScreen';
import ContactScreen from '../screens/ContactScreen';
import BankScreen from '../screens/BankScreen';
import GoJekScreen from '../screens/GoJekScreen';
import TelkomselScreen from '../screens/TelkomselScreen';
import EcommerceScreen from '../screens/EcommerceScreen';
import color from '../common/color';

export const RooterStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Identity: IdentityScreen,
  Job: JobScreen,
  Living: LivingScreen,
  Contact: ContactScreen,
  Bank: BankScreen,
  GoJek: GoJekScreen,
  Telkomsel: TelkomselScreen,
  Ecommerce: EcommerceScreen
})
