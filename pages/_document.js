import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <Head>
                    
                    <link rel="shortcut icon" href="../favicon.ico"/>
                    <link rel="icon" href="../favicon.ico" type="image/x-icon"/>
                    <link href="../vendors/vectormap/jquery-jvectormap-2.0.3.css" rel="stylesheet" type="text/css" />
                    <link href="../vendors/jquery-toggles/css/toggles.css" rel="stylesheet" type="text/css"/>
                    <link href="../vendors/jquery-toggles/css/themes/toggles-light.css" rel="stylesheet" type="text/css"/>
                    <link href="../vendors/jquery-toast-plugin/dist/jquery.toast.min.css" rel="stylesheet" type="text/css"/>
                    <link href="../css/style.css" rel="stylesheet" type="text/css"/>
                    <script src="vendors/jquery/dist/jquery.min.js"></script>
                    <script src="../vendors/popper.js/dist/umd/popper.min.js"></script>
                    <script src="vendors/bootstrap/dist/js/bootstrap.min.js"></script>
                    <script src="../js/jquery.slimscroll.js"></script>
                    <script src="../js/dropdown-bootstrap-extended.js"></script>
                    <script src="../js/feather.min.js"></script>
                    <script src="../vendors/jquery-toggles/toggles.min.js"></script>
                    <script src="../js/toggle-data.js"></script>
                    <script src="../vendors/owl.carousel/dist/owl.carousel.min.js"></script>
                    <script src="../js/init.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`}}></style>
                </body>
            </html>
        );
    }
}