import Link from "next/link"
import Button from "@mui/material/Button"
export default function HomeView() {
  return (
    <>
      <div>
        <h1>Hola</h1>
        <Link href="/mercadopago">
          <Button variant="contained">Click</Button>
        </Link>
      </div>
    </>
  )
}