import Image from "next/image";
import React from "react";

export default function StoreLocations() {
  return (
    <section className="flat-spacing-3 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Visit our store</span>
        </div>
        <div className="flat-tab-store flat-animate-tab">
          <ul className="widget-tab-2" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <a href="#hongkong" className="active" data-bs-toggle="tab">
                Hongkong
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#london" data-bs-toggle="tab">
                London
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#paris" data-bs-toggle="tab">
                Paris
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="hongkong" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Hongkong Store</h5>
                  <div className="description">
                    <p>
                      301 Front St WToronto,
                      <br />
                      Ecomus@support.com
                      <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Mon - Fri, 8:30am - 10:30pm
                      <br />
                      Saturday, 8:30am - 10:30pm <br />
                      Sunday Closed
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-map-1.png"
                    alt="store-img"
                    src="/images/shop/store/ourstore-map-1.png"
                    width={720}
                    height={464}
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="london" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">London Store</h5>
                  <div className="description">
                    <p>
                      301 Front St WToronto,
                      <br />
                      Ecomus@support.com
                      <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Mon - Fri, 8:30am - 10:30pm
                      <br />
                      Saturday, 8:30am - 10:30pm <br />
                      Sunday Closed
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-map-2.png"
                    alt="store-img"
                    src="/images/shop/store/ourstore-map-2.png"
                    width={720}
                    height={450}
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="paris" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Paris Store</h5>
                  <div className="description">
                    <p>
                      301 Front St WToronto,
                      <br />
                      Ecomus@support.com
                      <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Mon - Fri, 8:30am - 10:30pm
                      <br />
                      Saturday, 8:30am - 10:30pm <br />
                      Sunday Closed
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-map-3.png"
                    alt="store-img"
                    src="/images/shop/store/ourstore-map-3.png"
                    width={720}
                    height={439}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
