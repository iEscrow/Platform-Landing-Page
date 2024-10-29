import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import logoDark from '@assets/images/logo_dark.svg';
import videoIcon from '@assets/icons/videoIcon.png';
import halfArrowIcon from '@assets/icons/halfArrowIcon.png';
import { CustomButton } from '@ui';
import { StyledBanner, StyledButtonContainer } from '@styled-components';

export default function HomeBanner() {
  const { t } = useTranslation();

  return (
    <StyledBanner>
      <img src={logoDark} alt="iEscrow logo" />
      <span>{t('Home.motto')}</span>
      <h1>
        <Trans i18nKey="Home.title">
          <span></span>
        </Trans>
      </h1>
      <p>{t('Home.description')}</p>
      <StyledButtonContainer>
        <CustomButton to="#" variant="secondary">
          <img src={videoIcon} alt="video icon" />
          watch video
        </CustomButton>
        <CustomButton to="#" variant="primary">
          <img src={halfArrowIcon} alt="half arrow icon" />
          create escrow
        </CustomButton>
      </StyledButtonContainer>
    </StyledBanner>
  );
}
