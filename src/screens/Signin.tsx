import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';

import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from 'src/hooks/useAuth';
import { AppError } from 'src/utils/AppError';
import { useState } from 'react';

type FormData = {
  email: string;
  password: string;
}

export function SigIn() {
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const toast = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  async function handleSigIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde'

      setIsLoading(false);

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="cover"
        flex={1}
        position="absolute"
      />
      <VStack flex={1} px={10} pb={16}>

        <Center my={32}>

          <LogoSvg />

          <Text
            color="gray.100"
            fontSize="sm"
          >
            Treine sua mente e o seu corpo
          </Text>

        </Center>

        <Center>
          <Heading
            color="gray.100"
            fontSize="xl"
            mb={6}
            fontFamily="heading"
          >
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{ required: "Informe o e-mail." }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: "Informe a senha." }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button
            title="Acessar"
            onPress={handleSubmit(handleSigIn)}
            isLoading={isLoading}
          />
        </Center>

        <Center>
          <Text
            color="gray.100"
            fontSize="sm"
            mb={3}
            fontFamily="body"
            mt={24}
          >
            Ainda não tem uma conta?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}