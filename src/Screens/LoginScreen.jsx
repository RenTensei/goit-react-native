import {
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Platform,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
	Image,
} from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { styles } from './styleSheet';
import { FormInputs } from '../components/FormInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const LoginScreen = () => {
	const [focusedField, setFocusedField] = useState(false);

	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.registrationScreen}>
			<View style={[styles.formWrapper, styles.formLoginWrapper]}>
				<Text style={styles.title}>Увійти</Text>

				<View style={styles.inputList}>
					<FormInputs
						inputControl={{ control, focusedField, setFocusedField }}
					/>
				</View>
				<TouchableOpacity
					style={styles.primaryBtn}
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.primaryBtnText}>Зареєструватися</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.secondaryBtn}>
					<Text style={styles.secondaryBtnText}>
						Немає акаунту?{' '}
						<Text style={{ textDecorationLine: 'underline' }}>
							Зареєструватися
						</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};
