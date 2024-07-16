export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <meta
          name="description"
          content="Explore the world of Umair Jibran - a highly skilled full-stack developer with expertise in Node.js, JavaScript, and AWS. Discover his impressive portfolio and passion for open-source technologies. Connect with him to discuss your next project or exchange thoughts on the latest tech trends."
        />
        <meta name="author" content="Umair Jibran" />
        <meta
          name="keywords"
          content="mevn,vue,fullstack,developer,flutter,programmer,designer,umair,jibran,node,serverless,python,design,development,react,mern,aws,lambda,s3,ec2,aws,kubernetes,docker"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umairjibran.com/" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="%PUBLIC_URL%/favicon.png" />
        <link rel="canonical" url="https://umairjibran.com/" />
        <link rel="manifest" href="manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
        <script src="./canvasjs.min.js"></script>
        <title>Umair Jibran - FullStack Engineer & AWS Expert</title>
        {/* <script type="text/javascript">
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "gwopbymlm6");
        </script> */}
        <script async src="https://analytics.umami.is/script.js" data-website-id="ed1a6113-6f0e-4c58-bfc0-869c268a181c"></script>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}