import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NotFoundPage() {
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className="not-found">
          <h1>
            {locale == "id"
              ? "404 Halaman tidak ditemukan"
              : "404 Page Not Found"}
          </h1>
        </section>
      )}
    </LocaleConsumer>
  );
}

export default NotFoundPage;
