import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SigIn } from 'src/screens/Signin';
import { SignUp } from 'src/screens/Signup';

type AuthRoutes = {
  sigIn: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="sigIn"
        component={SigIn}
      />

      <Screen
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}