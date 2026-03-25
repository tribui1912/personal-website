export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-4 w-full">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Tri Bui · Founding Software Engineer · San Diego, CA · B.S. Computer Engineering, SDSU</p>
      </div>
    </footer>
  )
}

