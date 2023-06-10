import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connected Successfully')
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to Connect', error)
  }
}
bootstrap()
