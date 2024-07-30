import SliderItem from './SliderItem'

export default {
  title: 'SliderItem',
  component: { SliderItem }
}

export const DefaultVuew = () => ({
  components: { SliderItem },
  template: '<SliderItem><span><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</SliderItem>'
})
