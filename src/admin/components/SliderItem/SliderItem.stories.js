import SliderItem from './SliderItem'

export default {
  title: 'SliderItem',
  component: { SliderItem }
}

export const DefaultVuew = () => ({
  components: { SliderItem },
  template: '<SliderItem><h1>Some text</h1></SliderItem>'
})
