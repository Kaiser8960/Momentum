import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#ffffffff' }}> Welcome to Momentum.</Text>
      <TouchableOpacity 
        style={styles.squareButton} 
        onPress={() => router.push('/dashboard')}
      >
        <Text style={styles.buttonText}>Begin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  squareButton: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});