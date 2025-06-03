import {styled} from '@mui/material/styles';
import {Button, Card, Typography, IconButton} from '@mui/material';

type ProcessButtonProps = {
  active?: boolean;
}

export const FormContainer = styled('div')({
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  fontFamily: '"Proxima Nova", sans-serif',
});

export const HeaderContainer = styled('div')({
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  marginBottom: '20px',
  padding: '16px 24px',
});

export const HeaderContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const BackButton = styled(IconButton)({
  marginRight: 'auto',
});

export const UserName = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#315AB6',
  margin: '0 20px',
});

export const InstructionButton = styled(Button)({
  marginRight: '10px',
  color: '#315AB6',
  borderColor: '#315AB6',
  textTransform: 'none',
});

export const ProcessCard = styled(Card)({
  display: 'flex',
  padding: 0,
  marginBottom: '20px',
  background: '#f5f7fa',
  boxShadow: 'none',
  overflow: 'hidden',
});

export const ProcessButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ProcessButtonProps>(({active}) => ({
  flex: 1,
  padding: '15px',
  fontWeight: 'bold',
  backgroundColor: active ? '#315AB6' : 'transparent',
  color: active ? '#fff' : '#315AB6',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: active ? '#254a9e' : '#e0e0e0',
  },
}));

export const MainCard = styled(Card)({
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
});

export const ScanSection = styled('div')({
  textAlign: 'center',
  marginBottom: '30px',
});

export const ScanTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.3rem',
  textTransform: 'uppercase',
  marginBottom: '10px',
  color: '#333',
});

export const DateInfo = styled(Typography)({
  color: '#666',
  marginBottom: '20px',
  fontSize: '1.1rem',
});

export const BarcodePlaceholder = styled('div')({
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  margin: '0 auto',
  maxWidth: '400px',
});

export const MachineInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '30px',
});

export const MachineNumber = styled('div')({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#315AB6',
});

export const MachineName = styled('div')({
  fontSize: '1.5rem',
  color: '#333',
});

export const EndShiftButton = styled(Button)({
  padding: '15px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  backgroundColor: '#f44336',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d32f2f',
  },
});

export const ActiontButton = styled(Button)({
  padding: '15px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  backgroundColor: '#315AB6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#254a9e',
  },
});

export const StatsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '15px',
});

export const StatItem = styled('div')({
  textAlign: 'center',
  padding: '15px',
  backgroundColor: '#f5f7fa',
  borderRadius: '8px',
});

export const StatLabel = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '8px',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  color: '#555',
});

export const StatValue = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#315AB6',
});