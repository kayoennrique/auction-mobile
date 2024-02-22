import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <KeyboardAvoidingView 
        style={styles.keyboard}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 45}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <AppRoutes />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
});