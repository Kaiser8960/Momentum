import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#ffffffff' }}> Hello, this will be a test of my app.</Text>
      <Button onPress={() => alert('Hello, this will be a test of my app.')} title="Click Me" />
    </View>
  );
}