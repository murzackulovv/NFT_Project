import { Header } from "./header.js"

const creatApp = () => {
  const header = Header()

  document.body.append(header)
}
creatApp()