import Link from "next/link";

export const Timeline = () => {
  return (
    <div className="widget-content-tab">
      <div className="widget-content-inner active">
        <div className="widget-timeline">
          <ul className="timeline">
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/thiet-ke-website">
                  <div className="text-2 fw-6">Thiết kế website/app</div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/dang-ky-ten-mien">
                  <div className="text-2 fw-6">Đăng ký tên miền</div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/hosting">
                  <div className="text-2 fw-6">Hosting lưu trữ website</div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/cham-soc-website">
                  <div className="text-2 fw-6">Chăm sóc website/app</div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/email-server">
                  <div className="text-2 fw-6">Dịch vụ email server</div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="/branding">
                  <div className="text-2 fw-6">
                    Dịch vụ thiết kế Branding - Thương hiệu
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="timeline-badge success" />
              <div className="timeline-box">
                <Link className="timeline-panel" href="#">
                  <div className="text-2 fw-6">Chụp hình thương hiệu</div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
