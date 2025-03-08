import { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  flex: '1 0 auto',
  color: '#DFDFDF',
  padding: { xs: 6, sm: 12 },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export const wrapperStyles: SxProps<Theme> = {
  color: '#F0F0F0',
  width: '75%',
  padding: 3,
  backgroundColor: '#1F1F1F',
  border: '4px solid #7F7F7F',
  borderRadius: 2,
  maxWidth: 720,
  textAlign: 'justify',
  opacity: 0.9,
};

export const paragraphStyles: SxProps<Theme> = {
  margin: '1rem 0',
};

export const dataSectionStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const dataParagraphStyles: SxProps<Theme> = {
  maxWidth: 288,
  margin: '16px auto',
};

export const dividerStyles: SxProps<Theme> = {
  bgcolor: '#7d7d7d',
  mb: 2,
};
