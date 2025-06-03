import { Typography, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  FormContainer,
  HeaderContainer,
  HeaderContent,
  BackButton,
  UserName,
  InstructionButton,
  ProcessCard,
  ProcessButton,
  MainCard,
  ScanSection,
  ScanTitle,
  DateInfo,
  BarcodePlaceholder,
  MachineInfo,
  MachineNumber,
  MachineName,
  EndShiftButton,
  ActiontButton,
  StatsContainer,
  StatItem,
  StatLabel,
  StatValue
} from './SessionEnd.styles';

export const SessionEnd = () => {
  return (
    <FormContainer>
      <HeaderContainer>
        <HeaderContent>
          <BackButton>
            <ArrowBackIcon />
          </BackButton>
          <UserName>Тишин Егор Николаевич</UserName>
          <div>
            <InstructionButton variant="outlined">Инструкции</InstructionButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </HeaderContent>
      </HeaderContainer>

      <MainCard>
        <EndShiftButton variant="contained" fullWidth>
          Закончить смену
        </EndShiftButton>

        <ProcessCard>
          <ProcessButton active>Процесс</ProcessButton>
          <ProcessButton active={false}>Функции</ProcessButton>
        </ProcessCard>

        <ScanSection>
          <ScanTitle>1. Отсканируйте бирку:</ScanTitle>
          <DateInfo>20 июня 2024 г. дневная смена</DateInfo>
          <BarcodePlaceholder>
            <Typography variant="h6">Штрихкод</Typography>
          </BarcodePlaceholder>
        </ScanSection>

        <MachineInfo>
          <MachineNumber>Б</MachineNumber>
          <MachineName>Токарная с ЧПУ 4</MachineName>
        </MachineInfo>

        <ActiontButton variant="contained" fullWidth>
          Выполнить операцию
        </ActiontButton>

        <StatsContainer>
          <StatItem>
            <StatLabel>Изготовлено</StatLabel>
            <StatValue>0</StatValue>
          </StatItem>
          <StatItem sx={{backgroundColor: 'lightyellow'}}>
            <StatLabel>Несоответствующих</StatLabel>
            <StatValue>0</StatValue>
          </StatItem>
          <StatItem sx={{backgroundColor: 'lightgreen'}}>
            <StatLabel>Годных</StatLabel>
            <StatValue>0</StatValue>
          </StatItem>
        </StatsContainer>
      </MainCard>
    </FormContainer>
  );
};