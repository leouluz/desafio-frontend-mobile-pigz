import React from 'react'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { InputForm } from '../../components/Form/InputForm'

import Logo from '../../assets/pigz-logotipo-branco.svg'
import GoogleSvg from '../../assets/google-icon.svg'

import {
  Container,
  LoginView,
  HeaderView,
  AccountView,
  RowViewStart,
  TitleText,
  TitleInput,
  TitleTextLogin,
  TextAccount,
  TextCreateAccount,
  TextForgotPassword,
  TextTitleGoogle,
} from './styles'
import { Button } from '../../components/Button'
import { DivLine } from '../../components/DivLine'
import { ButtonGoogle } from '../../components/ButtonGoogle'

const schema = Yup.object().shape({
  email: Yup.string().required('Email é obrigatório!'),
  password: Yup.string().required('Password é obrigatório!'),
});

export function Signin({navigation}) {
  
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleLogin(){
    navigation.navigate("DashBoard");
  }

  return (
    <Container>
      <HeaderView>
        <Logo 
          width={100}
          height={50}
        />
        <TitleText>Para entregadores</TitleText>
      </HeaderView>

      <LoginView>
        <TitleTextLogin>Login</TitleTextLogin>
      </LoginView>

      <RowViewStart>
        <TitleInput>Email ou Telefone</TitleInput>
        <InputForm 
          name="email"
          control={control}
          placeholder="example@pigz.com.br"
          autoCorrect={false}
          error={errors.email && errors.email.message}
          />
      </RowViewStart>
      <RowViewStart style={{marginBottom: 24}}>
        <TitleInput>Senha</TitleInput>
        <InputForm 
          name="password"
          control={control}
          placeholder="*********"
          autoCorrect={false}
          secureTextEntry
          error={errors.password && errors.password.message}
          />
      </RowViewStart>
      <RowViewStart style={{marginBottom: 24}}>
        <TextForgotPassword>Esqueci minha senha</TextForgotPassword>
      </RowViewStart>
          <Button 
            title="Entrar" 
            onPress={handleSubmit(handleLogin)}
          />
        <AccountView>
          <TextAccount>Não tem uma Conta?</TextAccount>
          <TextCreateAccount> Criar agora!</TextCreateAccount>
        </AccountView>

        <AccountView style={{marginBottom: 24}}>
          <TextTitleGoogle>Entrar com</TextTitleGoogle>
          <DivLine/>
        </AccountView>
        <ButtonGoogle 
          title="Continuar com o Google"
          svg={GoogleSvg}
          onPress={handleLogin}
          />
    </Container>
  )
}