import { App } from "vue";
import { faPlus, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon,  } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  install(app: App) {
    app.component('font-awesome-icon', FontAwesomeIcon)

    library.add(faPlus, faArrowLeft, faTrash)
  }
}