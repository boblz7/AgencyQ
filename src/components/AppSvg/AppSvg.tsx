import styles from '@components/AppSvg/appSvg.module.scss'
import { IAppSvg } from '@interfaces/AppSvg'
import { consoleOnRender } from '@utils/sharedFncs'

export default async function AppSvg({
  path,
  color = 'white',
  size = 14,
  componentMessage,
  componentName = 'AppSvg',
}: IAppSvg) {
  consoleOnRender(componentMessage, componentName)

  const custStyle = {
    WebkitMaskImage: `url(${path})`,
    maskImage: `url(${path})`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
  }

  return <div className={styles.appSvg} style={custStyle}></div>
}
