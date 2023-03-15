import { App } from 'vue'
import { Field as VeeField, Form as VeeForm, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, min, url, } from '@vee-validate/rules';
import messages from './messages';

export default {
  install(app: App) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("VeeError", ErrorMessage);

    defineRule('required', (value: string) => required(value) || 'Is required')
    defineRule('min', min)
    defineRule('url', url)

  }
}