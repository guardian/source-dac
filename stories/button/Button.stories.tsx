import type {
  Parameters,
  Story,
} from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { SvgCross } from "@guardian/source-react-components"
import type { ButtonProps } from "@guardian/source-react-components"
import { Button } from "@guardian/source-react-components"
import {
  buttonThemeBrand,
  buttonThemeBrandAlt,
} from "@guardian/source-react-components"
import {
  buttonThemeReaderRevenue,
  buttonThemeReaderRevenueBrand,
  buttonThemeReaderRevenueBrandAlt,
} from "@guardian/source-react-components"
import type { ButtonPriority } from "@guardian/source-react-components"
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';

const priorityArgs: ButtonPriority[] = [
  "primary",
  "secondary",
  "tertiary",
  "subdued",
]
const readerRevenuePriorityArgs: ButtonPriority[] = ["primary", "tertiary"]
const themeParameters = {
  default: {},
  brand: {
    backgrounds: {
      default: "brandBackground.primary",
    },
    theme: buttonThemeBrand,
  },
  brandAlt: {
    backgrounds: {
      default: "brandAltBackground.primary",
    },
    theme: buttonThemeBrandAlt,
  },
  readerRevenue: {
    theme: buttonThemeReaderRevenue,
  },
  readerRevenueBrand: {
    backgrounds: {
      default: "brandBackground.primary",
    },
    theme: buttonThemeReaderRevenueBrand,
  },
  readerRevenueBrandAlt: {
    backgrounds: {
      default: "brandAltBackground.primary",
    },
    theme: buttonThemeReaderRevenueBrandAlt,
  },
}
const createStory = (args: Partial<ButtonProps>, parameters: Parameters) => {
  const story = Template.bind({})

  story.parameters = parameters
  story.args = args
  asChromaticStory(story)

  return story
}

export default {
  title: "Packages/source-react-components/Button",
  component: Button,
  argTypes: {
    icon: {
      mapping: {
        undefined: undefined,
        cross: <SvgCross />,
      },
    },
  },
  args: {
    children: "Button",
    size: "default",
    hideLabel: false,
    icon: "undefined",
    priority: "primary",
    iconSide: "left",
    nudgeIcon: false,
  },
}

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

// *****************************************************************************

export const [
  PrimaryPriorityDefaultTheme,
  SecondaryPriorityDefaultTheme,
  TertiaryPriorityDefaultTheme,
  SubduedPriorityDefaultTheme,
] = priorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.default)
)

// *****************************************************************************

export const [
  PrimaryPriorityBrandTheme,
  SecondaryPriorityBrandTheme,
  TertiaryPriorityBrandTheme,
  SubduedPriorityBrandTheme,
] = priorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.brand)
)

// *****************************************************************************

export const [
  PrimaryPriorityBrandAltTheme,
  SecondaryPriorityBrandAltTheme,
  TertiaryPriorityBrandAltTheme,
  SubduedPriorityBrandAltTheme,
] = priorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.brandAlt)
)

// *****************************************************************************

export const [
  PrimaryPriorityReaderRevenueTheme,
  TertiaryPriorityReaderRevenueTheme,
] = readerRevenuePriorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.readerRevenue)
)

// *****************************************************************************

export const [
  PrimaryPriorityReaderRevenueBrandTheme,
  TertiaryPriorityReaderRevenueBrandTheme,
] = readerRevenuePriorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.readerRevenueBrand)
)

// *****************************************************************************

export const [
  PrimaryPriorityReaderRevenueBrandAltTheme,
  TertiaryPriorityReaderRevenueBrandAltTheme,
] = readerRevenuePriorityArgs.map((priority) =>
  createStory({ priority }, themeParameters.readerRevenueBrandAlt)
)

// *****************************************************************************

export const DefaultSizeDefaultTheme = Template.bind({})
asChromaticStory(DefaultSizeDefaultTheme)

// *****************************************************************************

export const SmallSizeDefaultTheme = Template.bind({})
SmallSizeDefaultTheme.args = {
  size: "small",
}
asChromaticStory(SmallSizeDefaultTheme)

// *****************************************************************************

export const XSmallSizeDefaultTheme = Template.bind({})
XSmallSizeDefaultTheme.args = {
  size: "xsmall",
}
asChromaticStory(XSmallSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconLeftDefaultSizeDefaultTheme = Template.bind({})
TextAndIconLeftDefaultSizeDefaultTheme.args = {
  icon: "cross",
}
asChromaticStory(TextAndIconLeftDefaultSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconRightDefaultSizeDefaultTheme = Template.bind({})
TextAndIconRightDefaultSizeDefaultTheme.args = {
  icon: "cross",
  iconSide: "right",
}
asChromaticStory(TextAndIconRightDefaultSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconLeftSmallSizeDefaultTheme = Template.bind({})
TextAndIconLeftSmallSizeDefaultTheme.args = {
  icon: "cross",
  size: "small",
}
asChromaticStory(TextAndIconLeftSmallSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconRightSmallSizeDefaultTheme = Template.bind({})
TextAndIconRightSmallSizeDefaultTheme.args = {
  icon: "cross",
  iconSide: "right",
  size: "small",
}
asChromaticStory(TextAndIconRightSmallSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconLeftXSmallSizeDefaultTheme = Template.bind({})
TextAndIconLeftXSmallSizeDefaultTheme.args = {
  icon: "cross",
  size: "xsmall",
}
asChromaticStory(TextAndIconLeftXSmallSizeDefaultTheme)

// *****************************************************************************

export const TextAndIconRightXSmallSizeDefaultTheme = Template.bind({})
TextAndIconRightXSmallSizeDefaultTheme.args = {
  icon: "cross",
  iconSide: "right",
  size: "xsmall",
}
asChromaticStory(TextAndIconRightXSmallSizeDefaultTheme)

// *****************************************************************************

export const IconOnlyDefaultSizeDefaultTheme = Template.bind({})
IconOnlyDefaultSizeDefaultTheme.args = {
  icon: "cross",
  hideLabel: true,
}
asChromaticStory(IconOnlyDefaultSizeDefaultTheme)

// *****************************************************************************

export const IconOnlySmallSizeDefaultTheme = Template.bind({})
IconOnlySmallSizeDefaultTheme.args = {
  icon: "cross",
  hideLabel: true,
  size: "small",
}
asChromaticStory(IconOnlySmallSizeDefaultTheme)

// *****************************************************************************

export const IconOnlyXSmallSizeDefaultTheme = Template.bind({})
IconOnlyXSmallSizeDefaultTheme.args = {
  icon: "cross",
  hideLabel: true,
  size: "xsmall",
}
asChromaticStory(IconOnlyXSmallSizeDefaultTheme)
