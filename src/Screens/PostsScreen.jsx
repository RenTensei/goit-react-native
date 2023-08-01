import {
	ImageBackground,
	Keyboard,
	SafeAreaView,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import mountainsImg from '../images/mountains.png';
import { RegistrationScreen } from './RegistrationScreen';
import { styles } from './styleSheet';
import { LoginScreen } from './LoginScreen';

export const PostsScreen = () => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.mountainsImgBackground}
					source={mountainsImg}
				>
					{/* <RegistrationScreen /> */}
					<LoginScreen />
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

//  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// 	</TouchableWithoutFeedback>
