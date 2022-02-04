import { css } from "@emotion/react"
import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import { SvgAlert } from "@guardian/source-react-components"
import { SvgAlertRound } from "@guardian/source-react-components"
import { SvgAlertTriangle } from "@guardian/source-react-components"
import { SvgAppleBrand } from "@guardian/source-react-components"
import { SvgArrowDownStraight } from "@guardian/source-react-components"
import { SvgArrowLeftStraight } from "@guardian/source-react-components"
import { SvgArrowRightStraight } from "@guardian/source-react-components"
import { SvgArrowUpStraight } from "@guardian/source-react-components"
import { SvgAudio } from "@guardian/source-react-components"
import { SvgCamera } from "@guardian/source-react-components"
import { SvgCheckmark } from "@guardian/source-react-components"
import { SvgChevronDownSingle } from "@guardian/source-react-components"
import { SvgChevronLeftDouble } from "@guardian/source-react-components"
import { SvgChevronLeftSingle } from "@guardian/source-react-components"
import { SvgChevronRightDouble } from "@guardian/source-react-components"
import { SvgChevronRightSingle } from "@guardian/source-react-components"
import { SvgChevronUpSingle } from "@guardian/source-react-components"
import { SvgClock } from "@guardian/source-react-components"
import { SvgCreditCard } from "@guardian/source-react-components"
import { SvgCross } from "@guardian/source-react-components"
import { SvgDirectDebit } from "@guardian/source-react-components"
import { SvgDirectDebitWide } from "@guardian/source-react-components"
import { SvgEnvelope } from "@guardian/source-react-components"
import { SvgExternal } from "@guardian/source-react-components"
import { SvgEye } from "@guardian/source-react-components"
import { SvgEyeStrike } from "@guardian/source-react-components"
import { SvgFacebook } from "@guardian/source-react-components"
import { SvgFacebookBrand } from "@guardian/source-react-components"
import { SvgGift } from "@guardian/source-react-components"
import { SvgGlobe } from "@guardian/source-react-components"
import { SvgGoogleBrand } from "@guardian/source-react-components"
import { SvgHouse } from "@guardian/source-react-components"
import { SvgIndent } from "@guardian/source-react-components"
import { SvgInfo } from "@guardian/source-react-components"
import { SvgLinkedIn } from "@guardian/source-react-components"
import { SvgMessenger } from "@guardian/source-react-components"
import { SvgMinus } from "@guardian/source-react-components"
import { SvgOfflineCloud } from "@guardian/source-react-components"
import { SvgPayPal } from "@guardian/source-react-components"
import { SvgPerson } from "@guardian/source-react-components"
import { SvgPinterest } from "@guardian/source-react-components"
import { SvgPlay } from "@guardian/source-react-components"
import { SvgPlus } from "@guardian/source-react-components"
import { SvgQuote } from "@guardian/source-react-components"
import { SvgSettings } from "@guardian/source-react-components"
import { SvgSpeechBubble } from "@guardian/source-react-components"
import { SvgStar } from "@guardian/source-react-components"
import { SvgTickRound } from "@guardian/source-react-components"
import { SvgTwitter } from "@guardian/source-react-components"
import { SvgVideo } from "@guardian/source-react-components"
import { SvgWhatsApp } from "@guardian/source-react-components"
import type { IconProps, IconSize } from "@guardian/source-react-components"

const uiIcons = {
  SvgAlert,
  SvgAlertRound,
  SvgAlertTriangle,
  SvgAppleBrand,
  SvgArrowDownStraight,
  SvgArrowLeftStraight,
  SvgArrowRightStraight,
  SvgArrowUpStraight,
  SvgChevronDownSingle,
  SvgChevronLeftDouble,
  SvgChevronLeftSingle,
  SvgChevronRightDouble,
  SvgChevronRightSingle,
  SvgChevronUpSingle,
  SvgClock,
  SvgEnvelope,
  SvgExternal,
  SvgEye,
  SvgEyeStrike,
  SvgFacebook,
  SvgFacebookBrand,
  SvgGift,
  SvgGlobe,
  SvgGoogleBrand,
  SvgHouse,
  SvgCheckmark,
  SvgCamera,
  SvgCross,
  SvgLinkedIn,
  SvgMessenger,
  SvgMinus,
  SvgOfflineCloud,
  SvgPlay,
  SvgPlus,
  SvgPerson,
  SvgPinterest,
  SvgQuote,
  SvgIndent,
  SvgInfo,
  SvgSettings,
  SvgSpeechBubble,
  SvgStar,
  SvgTickRound,
  SvgTwitter,
  SvgAudio,
  SvgVideo,
  SvgWhatsApp,
}

const paymentIcons = {
  SvgCreditCard,
  SvgDirectDebit,
  SvgPayPal,
}

const widePaymentIcons = {
  SvgDirectDebitWide,
}

export default {
  title: "Packages/source-react-components/Icons",
}

// *****************************************************************************

type IconChromaticStoryArgs = {
  size: IconSize
  icons: Array<React.FunctionComponent<IconProps>>
}
const Template: Story<IconChromaticStoryArgs> = (
  args: IconChromaticStoryArgs
) => {
  const icons = args.icons.map((Icon, index) => (
    <Icon key={index} size={args.size} />
  ))

  return <>{icons}</>
}

// *****************************************************************************

export const XsmallIconsDefaultTheme = Template.bind({})
XsmallIconsDefaultTheme.args = {
  size: "xsmall",
  icons: Object.values(uiIcons),
}
asChromaticStory(XsmallIconsDefaultTheme)

// *****************************************************************************

export const SmallIconsDefaultTheme = Template.bind({})
SmallIconsDefaultTheme.args = {
  size: "small",
  icons: Object.values(uiIcons),
}
asChromaticStory(SmallIconsDefaultTheme)

// *****************************************************************************

export const MediumIconsDefaultTheme = Template.bind({})
MediumIconsDefaultTheme.args = {
  size: "medium",
  icons: Object.values(uiIcons),
}
asChromaticStory(MediumIconsDefaultTheme)

// *****************************************************************************

export const MediumIconsBrandTheme = Template.bind({})
MediumIconsBrandTheme.args = {
  size: "medium",
  icons: Object.values(uiIcons),
}
MediumIconsBrandTheme.parameters = {
  backgrounds: {
    default: "brandBackground.primary",
  },
}
MediumIconsBrandTheme.decorators = [
  (Story: Story) => (
    <div
      css={css`
        svg {
          fill: white;
        }
      `}
    >
      <Story />
    </div>
  ),
]
asChromaticStory(MediumIconsBrandTheme)

// *****************************************************************************

export const PaymentIconsDefaultTheme = Template.bind({})
PaymentIconsDefaultTheme.args = {
  size: "medium",
  icons: Object.values(paymentIcons),
}
asChromaticStory(PaymentIconsDefaultTheme)

// *****************************************************************************

export const WidePaymentIconsDefaultTheme = Template.bind({})
WidePaymentIconsDefaultTheme.args = {
  size: "medium",
  icons: Object.values(widePaymentIcons),
}
asChromaticStory(WidePaymentIconsDefaultTheme)
