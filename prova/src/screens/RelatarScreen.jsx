import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function RelatarScreen() {
  const { control, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const [showPicker, setShowPicker] = useState(false);

  // Pega localização do usuário
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão para acessar localização negada!');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setValue('localizacao', {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const onSubmit = async (data) => {
    try {
      const novoRelato = {
        id: uuid.v4(),
        ...data,
      };

      const jsonSalvo = await AsyncStorage.getItem('ocorrencias');
      const ocorrencias = jsonSalvo ? JSON.parse(jsonSalvo) : [];

      ocorrencias.push(novoRelato);

      await AsyncStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));

      alert('Relato salvo com sucesso!');
      reset({
  localizacao: data.localizacao,
});
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar o relato.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        {/* Título */}
        <Controller
          control={control}
          name="titulo"
          rules={{ required: 'Título é obrigatório' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Título"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.titulo}
              style={styles.input}
            />
          )}
        />
        <HelperText type="error" visible={!!errors.titulo}>
          {errors.titulo?.message}
        </HelperText>

        {/* Categoria */}
        <Controller
          control={control}
          name="categoria"
          rules={{ required: 'Categoria é obrigatória' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Categoria"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ex: Trânsito, Segurança"
              error={!!errors.categoria}
              style={styles.input}
            />
          )}
        />
        <HelperText type="error" visible={!!errors.categoria}>
          {errors.categoria?.message}
        </HelperText>

        {/* Descrição */}
        <Controller
          control={control}
          name="descricao"
          rules={{ required: 'Descrição é obrigatória' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Descrição"
              mode="outlined"
              multiline
              numberOfLines={4}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.descricao}
              style={styles.input}
            />
          )}
        />
        <HelperText type="error" visible={!!errors.descricao}>
          {errors.descricao?.message}
        </HelperText>

        {/* Data e Hora */}
        <Controller
          control={control}
          name="data"
          rules={{ required: 'Data e hora são obrigatórias' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={{ marginBottom: 8 }}>
              <TextInput
                label="Data e Hora"
                mode="outlined"
                value={value ? value.toLocaleString() : ''}
                onFocus={() => setShowPicker(true)}
                showSoftInputOnFocus={false}
                error={!!error}
                style={styles.input}
              />
              {error && <HelperText type="error">{error.message}</HelperText>}
              {showPicker && (
                <DateTimePicker
                  value={value || new Date()}
                  mode="datetime"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(event, selectedDate) => {
                    setShowPicker(false);
                    if (selectedDate) onChange(selectedDate);
                  }}
                />
              )}
            </View>
          )}
        />

        {/* Localização */}
        <Controller
          control={control}
          name="localizacao"
          rules={{ required: 'Localização é obrigatória' }}
          render={({ field: { value } }) => (
            <TextInput
              label="Localização (lat, lng)"
              mode="outlined"
              value={value ? `${value.latitude.toFixed(4)}, ${value.longitude.toFixed(4)}` : ''}
              disabled
              style={styles.input}
            />
          )}
        />
        <HelperText type="error" visible={!!errors.localizacao}>
          {errors.localizacao?.message}
        </HelperText>

        <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ marginTop: 16 }}>
          Enviar Relato
        </Button>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 45,
  },
  input: {
    marginBottom: 8,
  },
});
