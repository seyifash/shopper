
import ReactQueryProvider from "@/providers/reactQueryprovider";
import "./globals.css";
import ErrorBoundary from "@/component/common/ErrorBoundary";

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
          <ReactQueryProvider >{children}</ReactQueryProvider>
         </ErrorBoundary>
      </body>
    </html>
  );
}
