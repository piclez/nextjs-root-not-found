export const metadata = {
  title: 'Marketing',
  description: '',
}

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default MarketingLayout;
