export default function GTMNoScript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NFNLDPZ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />
  );
}
