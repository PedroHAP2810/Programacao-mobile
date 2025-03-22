import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Text key={index} style={styles.textItem}>
            Item {index + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aee',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  textItem: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
