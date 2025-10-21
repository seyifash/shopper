
import ReactQueryProvider from "@/providers/reactQueryprovider";
import "./globals.css";
import ErrorBoundary from "@/component/common/ErrorBoundary";
import NetworkStatusBanner from "@/component/Layout/NetworkStatus";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body
      >
         <ErrorBoundary>
          <ReactQueryProvider > 
            {children}
            <NetworkStatusBanner />
          </ReactQueryProvider>
         </ErrorBoundary>
      </body>
    </html>
  );
}
