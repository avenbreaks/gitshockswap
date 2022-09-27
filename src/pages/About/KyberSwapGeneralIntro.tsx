import { Trans } from '@lingui/macro'
import React from 'react'
import { Repeat } from 'react-feather'
import { Link } from 'react-router-dom'
import { useMedia } from 'react-use'
import { Box, Flex, Text } from 'rebass'

import { ButtonLight, ButtonPrimary } from 'components/Button'
import { MoneyBagOutline } from 'components/Icons'
import useMixpanel, { MIXPANEL_TYPE } from 'hooks/useMixpanel'
import useTheme from 'hooks/useTheme'

const KyberSwapGeneralIntro = () => {
  const above768 = useMedia('(min-width: 768px)')
  const theme = useTheme()
  const { mixpanelHandler } = useMixpanel()

  const renderKyberSwapIntroDEX = () => {
    return (
      <Text
        as="span"
        sx={{
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        <Trans>
          Gitshock Swap is a multinetwork decentralized exchange (DEX) aggregator powered by GTFX token. We allow users
          to <b>swap, create tokens, stake and create pool easier!</b>
        </Trans>
      </Text>
    )
  }

  const renderKyberSwapIntroAMM = () => {
    return (
      <Text
        as="span"
        sx={{
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        <Trans>
          Gitshock Swap is also playing an automated market maker (AMM) where liquidity providers can add liquidity to
          our multinetwork pools and earn! <b>Use your GTFX to stake, validate and propose</b> your ideas to community!
        </Trans>
      </Text>
    )
  }

  const renderSwapNowButton = () => {
    return (
      <ButtonPrimary
        onClick={() => mixpanelHandler(MIXPANEL_TYPE.ABOUT_SWAP_CLICKED)}
        as={Link}
        to="/swap?highlightBox=true"
        style={{
          width: '216px',
          padding: '10px 12px',
          borderRadius: '32px',
        }}
      >
        <Repeat size={20} />
        <Text fontSize="14px" marginLeft="8px">
          <Trans>Swap Now</Trans>
        </Text>
      </ButtonPrimary>
    )
  }

  const renderStartEarningButton = () => {
    return (
      <ButtonLight
        as={Link}
        to={'/pools?tab=elastic'}
        onClick={() => mixpanelHandler(MIXPANEL_TYPE.ABOUT_START_EARNING_CLICKED)}
        style={{
          width: '216px',
        }}
      >
        <MoneyBagOutline color={theme.primary} size={20} />
        <Text fontSize="14px" marginLeft="8px">
          <Trans>Coming Soon</Trans>
        </Text>
      </ButtonLight>
    )
  }

  if (above768) {
    return (
      <Box
        sx={{
          marginTop: '32px',
          width: '100%',
          paddingLeft: '64px',
          paddingRight: '64px',

          display: 'grid',
          gap: '24px 72px ',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr auto',
          justifyItems: 'center',
        }}
      >
        {renderKyberSwapIntroDEX()}
        {renderKyberSwapIntroAMM()}
        {renderSwapNowButton()}
        {renderStartEarningButton()}
      </Box>
    )
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        marginTop: '32px',
        width: '100%',
        paddingLeft: '32px',
        paddingRight: '32px',
        rowGap: '48px',
      }}
    >
      <Flex
        flexDirection={'column'}
        sx={{
          alignItems: 'center',
          rowGap: '16px',
        }}
      >
        {renderKyberSwapIntroDEX()}
        {renderSwapNowButton()}
      </Flex>

      <Flex
        flexDirection={'column'}
        sx={{
          alignItems: 'center',
          rowGap: '16px',
        }}
      >
        {renderKyberSwapIntroAMM()}
        {renderStartEarningButton()}
      </Flex>
    </Flex>
  )
}

export default KyberSwapGeneralIntro
