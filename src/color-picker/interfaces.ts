import { Ref } from 'vue';
import { ColorObject, ColorPickerChangeTrigger } from '.';

// color modes
export type TdColorModes = 'monochrome' | 'linear-gradient';

// color context
export interface TdColorContext {
  color: ColorObject;
  trigger: ColorPickerChangeTrigger;
}
