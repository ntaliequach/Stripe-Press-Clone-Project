
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function MainPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
