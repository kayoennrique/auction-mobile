import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SENT } from '../../../business/constants/statesBind';

export default function SendBid({ sendBid, color }) {
  const [amount, setAmount] = useState('');
  const [erro, setErro] = useState('');
  const [success, setSuccess] = useState('');
  const [sending, setSending] = useState(false);

  const styles = functionStyles(color, erro);

  const validShipping = async () => {
    setSending(true);
    setErro('');
    setSuccess('');

    const stateBid = await sendBid(amount);

    if (stateBid === SENT) {
      setAmount('');
      setSuccess(stateBid);
    } else {
      setErro(stateBid);
    }

    setSending(false);
  }

  return <View style={styles.bottom}>
    {!!erro && <Text style={styles.erro}>{erro}</Text>}
    {!!success && <Text style={styles.success}>{success}</Text>}
    <TextInput
      value={amount}
      onChangeText={setAmount}
      placeholder="R$"
      editable={!sending}
      style={styles.input}
      keyboardType="decimal-pad"
    />
    <TouchableOpacity
      accessibilityHint="Enviar lance"
      onPress={validShipping}
      disabled={sending}
      style={styles.button}>
    </TouchableOpacity>
  </View>
}

const functionStyles = (color, erro) => StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    padding: 8,
    flexWrap: 'wrap',
  },
  erro: {
    width: '100%',
    marginHorizontal: 8,

    color: '#FF0000',

    fontSize: 14,
    marginBottom: 8,
  },
  success: {
    width: '100%',
    marginHorizontal: 8,

    color: '#2d6628',

    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: erro ? '#FF0000' : '#4A4A4A',
    color: erro ? '#FF0000' : '#4A4A4A',
    borderRadius: 16,
    height: 53,

    padding: 16,
    margin: 8,

    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    margin: 8,
    padding: 16,
    backgroundColor: color,
    borderRadius: 16,
  },
});