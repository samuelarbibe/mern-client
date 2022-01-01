import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h2' fontWeight='bold'>Welcome to your client</Typography>
    </Container>
  )
}
