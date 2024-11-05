import { Button } from "@mui/material"
interface ButtonProps {
    text:string
}
export default function ButtonComponents({text}:ButtonProps) {
  return (
<Button variant="outlined" style={{width:350}}>{text}</Button>
  )
}
