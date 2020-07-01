import { configure } from '@storybook/react'
import 'ui-neumorphism/dist/index.css'

const req = require.context('../components', true, /.stories.tsx$/);
configure(req, module)
