import React from 'react'
interface IFormData {
  formData: any,
  changeFormDate: (val: string, name: string) => void,
  getData: () => void
}
const ctx = React.createContext<IFormData>({
  formData: {},
  changeFormDate: (val: string, name: string) => {},
  getData: () => {}
})

export const { Provider, Consumer } = ctx;
export default ctx;