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
import * as ImagePicker from 'expo-image-picker';

import removeIconBtnImg from '../images/remove.png';
import addIconBtnImg from '../images/add.png';
import { styles } from './styleSheet';
import { FormInputs } from '../components/FormInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const RegistrationScreen = () => {
	const [userIconUri, setUserIconUri] = useState(null);
	const [focusedField, setFocusedField] = useState(false);

	const { control, handleSubmit } = useForm({
		defaultValues: {
			login: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = data => {
		console.log(data);
	};

	const selectIcon = async () => {
		const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (permission.granted === false) {
			alert('Permission to access camera roll is required!');
			return;
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			console.log(result.assets[0]);
			setUserIconUri(result.assets[0].uri);
		}
	};

	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.registrationScreen}>
			<View style={styles.formWrapper}>
				<View style={styles.userIconUri}>
					{userIconUri && (
						<Image
							style={{ flex: 1, borderRadius: 16 }}
							source={{ uri: userIconUri }}
						/>
					)}

					<TouchableOpacity
						style={styles.addIconBtn}
						onPress={userIconUri ? () => setUserIconUri(null) : selectIcon}
					>
						<Image
							source={userIconUri ? removeIconBtnImg : addIconBtnImg}
							style={{ width: 25, height: 25 }}
						/>
					</TouchableOpacity>
				</View>

				<Text style={styles.title}>Реєстрація</Text>

				<View style={styles.inputList}>
					<Controller
						control={control}
						name="login"
						rules={{ required: true }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<View>
								<TextInput
									style={[
										styles.input,
										focusedField === 'login' && styles.inputFocused,
									]}
									placeholder="Логін"
									onChangeText={onChange}
									onFocus={() => setFocusedField('login')}
									onBlur={() => setFocusedField('')}
									value={value}
								/>
								{error && (
									<Text style={styles.errorMessage}>Login is required.</Text>
								)}
							</View>
						)}
					/>

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
					<Text style={styles.secondaryBtnText}>Вже є акаунт? Увійти</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};
