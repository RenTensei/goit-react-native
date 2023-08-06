import { Controller } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../Screens/styleSheet';
import { useState } from 'react';

export const FormInputs = ({
  inputControl: { control, focusedField, setFocusedField },
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <Controller
        control={control}
        name="email"
        // rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                focusedField === 'email' && styles.inputFocused,
              ]}
              placeholder="Адреса електронної пошти"
              onChangeText={onChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              value={value}
            />
            {error && (
              <Text style={styles.errorMessage}>Email is required.</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        // rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                focusedField === 'password' && styles.inputFocused,
              ]}
              placeholder="Пароль"
              onChangeText={onChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField('')}
              value={value}
            />
            <TouchableOpacity
              style={styles.togglePasswordBtn}
              onPress={() => setIsPasswordHidden(p => !p)}
            >
              <Text style={styles.secondaryBtnText}>
                {isPasswordHidden ? 'Показати' : 'Сховати'}
              </Text>
            </TouchableOpacity>
            {error && (
              <Text style={styles.errorMessage}>Password is required.</Text>
            )}
          </View>
        )}
      />
    </>
  );
};
