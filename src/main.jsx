import { render } from 'solid-js/web'
import { lazy } from 'solid-js'

const App = lazy(() => import('./App.jsx'))

render(() => <App />, document.getElementById('root'))