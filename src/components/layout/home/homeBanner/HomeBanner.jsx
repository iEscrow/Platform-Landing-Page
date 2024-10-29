import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import logoDark from '@assets/images/logo_dark.svg';
import { StyledBanner } from '@styled-components';
import { CustomButton } from '@ui';
import videoIcon from '@assets/icons/videoIcon.png';
import halfArrowIcon from '@assets/icons/halfArrowIcon.png';

export default function HomeBanner() {
  const { t } = useTranslation();

  return (
    <StyledBanner>
      <div>
        <img src={logoDark} alt="iEscrow logo" />
        <span>{t('Home.motto')}</span>
      </div>
      <h1>
        <Trans i18nKey="Home.title">
          <span></span>
        </Trans>
      </h1>
      <p>{t('Home.description')}</p>
      <div>
        <CustomButton to="#" variant="secondary">
          <img src={videoIcon} alt="video icon" />
          watch video
        </CustomButton>
        <CustomButton to="#" variant="primary">
          <img src={halfArrowIcon} alt="half arrow icon" />
          create escrow
        </CustomButton>
      </div>
    </StyledBanner>
  );
}
