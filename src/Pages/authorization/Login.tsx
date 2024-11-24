import { useState } from 'react';
import { Button, Box, Typography, InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { AppDispatch } from '../../store/store';
import { setAuthUser, setIsAuthorized } from '../../slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface MyForm {
  login: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .email('Введите корректный email-адрес')
    .required('Email обязателен'),
  password: Yup.string()
    .min(6, 'Введите корректный пароль')
    .required('Пароль обязателен'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<MyForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const resetForm = () => {
    reset({
      login: '',
      password: '',
    });
  };

  const submit: SubmitHandler<MyForm> = async (data) => {
    try {
      const response = await axios.post('http://localhost:4040/api/auth', data);
      const token = response.data.token;
      const isAuthorized = response.data.auth;
      dispatch(setAuthUser(token));
      dispatch(setIsAuthorized(isAuthorized));
      navigate('/');
      resetForm();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError('login', {
            type: 'manual',
            message: 'Некорректный логин или пароль',
          });
          setError('password', {
            type: 'manual',
            message: 'Некорректный логин или пароль',
          });
        } else if (error.response?.status === 500) {
          toast.error('Ошибка! Попробуйте еще раз');
          console.log('Ошибка! Попробуйте еще раз');
        }
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="h4" sx={{ mt: '64px' }}>
          {'Авторизация'}
        </Typography>
        <Typography variant="h5" sx={{ mt: '90px' }}>
          {'Вход'}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(submit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '485px',
            mt: '35px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '30px',
            }}
          >
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Логин"
                  placeholder="Введите e-mail"
                  variant="outlined"
                  error={!!errors.login}
                  helperText={errors.login ? errors.login.message : ''}
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Пароль"
                  placeholder="Введите пароль"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Box>
          <Button
            sx={{
              width: '100%',
              boxSizing: 'border-box',
              height: '42px',
              mt: '40px',
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            {'Войти'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;