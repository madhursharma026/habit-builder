import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
