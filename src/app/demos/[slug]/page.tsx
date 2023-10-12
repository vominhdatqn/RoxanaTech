import { find, isEmpty } from "lodash";
import React from "react";

const itemsAll = [
  {
    id: 1,
    url: "/assets/images/product-item-1.1.png",
    href: "https://ciseco-reactjs.vercel.app/",
    name: "san-pham-demo-website-ciseco",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-2.png",
    href: "https://andshop-reactjs.netlify.app/",
    name: "san-pham-demo-website-andshop",
  },
  {
    id: 3,
    url: "/assets/images/product-demo-3.png",
    href: "https://voxo-next-reactpixelstrap.vercel.app/",
    name: "san-pham-demo-website-voxo",
  },
  {
    id: 4,
    url: "/assets/images/product-demo-7.png",
    href: "https://xtreme-react-dark.netlify.app/",
    name: "san-pham-demo-website-xtreme",
  },
  {
    id: 5,
    url: "/assets/images/product-demo-5.png",
    href: "https://roxana-tech-studio.vercel.app/",
    name: "san-pham-demo-website-roxana-tech-studio",
  },
  {
    id: 6,
    url: "/assets/images/product-demo-6.png",
    href: "https://roxana-tech-studio-admin.vercel.app/",
    name: "san-pham-demo-website-roxana-tech-studio-admin",
  },
  {
    id: 7,
    url: "/assets/images/product-demo-mobile-1.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
    name: "contact-form",
  },
  {
    id: 8,
    url: "/assets/images/product-demo-mobile-2.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
    name: "contact-form",
  },
];

export default function DemosSlug({ params }: { params: { slug: string } }) {
  const demoItem = find(itemsAll, (item) => item?.name === params?.slug);
  return (
    <section className="roxanatech-demos-item__slug">
      {!isEmpty(demoItem) ? (
        <iframe
          src={demoItem.href}
          name="preview-frame"
          frameBorder="0"
          data-view="fullScreenPreview"
          allow="geolocation 'self'; autoplay 'self'"
          style={{ height: 588, width: "100%", backgroundColor: "white" }}
        ></iframe>
      ) : null}
    </section>
  );
}
