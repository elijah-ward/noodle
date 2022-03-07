import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<script
					    async
					    src="https://www.googletagmanager.com/gtag/js?id=G-CTP9CMRCP3" >
					</script>
					<script dangerouslySetInnerHTML={
					    { __html: `
					        window.dataLayer = window.dataLayer || [];
					        function gtag(){window.dataLayer.push(arguments)}
					        gtag("js", new Date());
					        gtag("config", "<G-CTP9CMRCP3>");
					    `}
					}>
					</script>
					<link rel='icon' type='image/x-icon' href='static/favicon.ico' />
					<link
					  rel="stylesheet"
					  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}