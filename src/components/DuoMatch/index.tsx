import { View, Modal, ModalProps, Text, TouchableOpacity, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native'
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCooping, setIsCooping] = useState(false)



  async function handleCopyDiscordUser() {
    setIsCooping(true)
    await Clipboard.setStringAsync(discord)
    alert('Usuário do Discord Copiado!')
    setIsCooping(false)

  }


  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}>

      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle
            color={THEME.COLORS.SUCCESS}
            size={64}
            weight='bold' />

          <Heading
            title="lest's Play!"
            subtitle='Agora é só começar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione seu Discord
          </Text>

          <TouchableOpacity
            onPress={handleCopyDiscordUser}
            disabled={isCooping}
            style={styles.discordButton}>

            <Text style={styles.discord}>
              {isCooping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}