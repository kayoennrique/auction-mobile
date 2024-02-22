import React from 'react';

import { View, StyleSheet } from 'react-native';

export default function Card({ children, style, Component = View, ...props }) {
  return <Component style={[styles.card, style]} {...props}>
    {children}
  </Component>
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,

    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }
});