import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import { ChangeWalletAddress } from 'src/redux/action/authAction';

// components

const UserEditFrom = ({ data }) => {

  const dispatch = useDispatch(); 

  const LoginSchema = Yup.object().shape({
    yourname: Yup.string().required('No Name provided.'),
    walletAddress: Yup.string().required('No Wallet Address provided.').min(42, 'Wallet address should be 42 chars !').max(42, 'Wallet address inccorect !')
  });

  const defaultValues = {
    email: data.email,
    yourname: data.yourname,
    walletAddress: data.walletaddress,
    coin: data.coin,
    life: data.creditlife
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (values) => {
    dispatch(ChangeWalletAddress({walletaddress:values.walletAddress}))
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ my: 2 }}>
          <RHFTextField name="yourname" label="Your Name" disabled />
          <RHFTextField name="email" label="Email address" disabled />
          <RHFTextField name="walletAddress" label="Wallet Address" />
          <RHFTextField name="coin" label="Total Coin" disabled />
          <RHFTextField name="life" label="Credited Life" disabled />
        </Stack>

        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          submit
        </LoadingButton>
      </FormProvider>
    </>
  );
}
export default UserEditFrom;