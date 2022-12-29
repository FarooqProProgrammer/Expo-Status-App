

import HomeScreen from '../screens/Home';
import ImagePicker from '../screens/ImagePiker';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImagePicker}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Route;

