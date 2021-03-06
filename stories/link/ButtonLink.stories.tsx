import type { Story } from "../../lib/@types/storybook-emotion-10-fixes"
import { asChromaticStory } from "../../lib/story-intents"
import { SvgExternal } from "@guardian/source-react-components"
import type { ButtonLinkProps } from "@guardian/source-react-components"
import { ButtonLink } from "@guardian/source-react-components"

export default {
  title: "Packages/source-react-components/ButtonLink",
  component: ButtonLink,
  args: {
    priority: "primary",
    subdued: false,
    icon: <SvgExternal />,
    iconSide: "left",
  },
  argTypes: {
    icon: {
      mapping: {
        undefined: undefined,
        SvgExternal: <SvgExternal />,
      },
    },
  },
}

const Template: Story = (args: ButtonLinkProps) => (
  <ButtonLink {...args}>Click Me</ButtonLink>
)

// *****************************************************************************

export const PrimaryButtonLinkDefaultTheme = Template.bind({})
PrimaryButtonLinkDefaultTheme.args = {
  icon: "undefined",
}
asChromaticStory(PrimaryButtonLinkDefaultTheme)

// *****************************************************************************

export const SecondaryButtonLinkDefaultTheme = Template.bind({})
SecondaryButtonLinkDefaultTheme.args = {
  priority: "secondary",
  icon: "undefined",
}
asChromaticStory(SecondaryButtonLinkDefaultTheme)

// *****************************************************************************

export const PrimarySubduedButtonLinkDefaultTheme = Template.bind({})
PrimarySubduedButtonLinkDefaultTheme.args = {
  subdued: true,
  icon: "undefined",
}
asChromaticStory(PrimarySubduedButtonLinkDefaultTheme)

// *****************************************************************************

export const SecondarySubduedButtonLinkDefaultTheme = Template.bind({})
SecondarySubduedButtonLinkDefaultTheme.args = {
  priority: "secondary",
  subdued: true,
  icon: "undefined",
}
asChromaticStory(SecondarySubduedButtonLinkDefaultTheme)

// *****************************************************************************

export const PrimaryIconButtonLinkDefaultTheme = Template.bind({})
asChromaticStory(PrimaryIconButtonLinkDefaultTheme)

// *****************************************************************************

export const SecondaryIconButtonLinkDefaultTheme = Template.bind({})
SecondaryIconButtonLinkDefaultTheme.args = {
  priority: "secondary",
}
asChromaticStory(SecondaryIconButtonLinkDefaultTheme)

// *****************************************************************************

export const SubduedIconButtonLinkDefaultTheme = Template.bind({})
SubduedIconButtonLinkDefaultTheme.args = {
  subdued: true,
}
asChromaticStory(SubduedIconButtonLinkDefaultTheme)

// *****************************************************************************

export const RightIconButtonLinkDefaultTheme = Template.bind({})
RightIconButtonLinkDefaultTheme.args = {
  iconSide: "right",
}
asChromaticStory(RightIconButtonLinkDefaultTheme)

// *****************************************************************************
