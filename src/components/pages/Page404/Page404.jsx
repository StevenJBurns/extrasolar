import React from "react";
import { Page } from '../Page/Page';
import "assets/images/black-hole.jpg";
import "./Page404.scss";

export const Page404 = props => {
  return (
    <Page {...props}>
      <section id="page-404">
        <h1>Page Not Found</h1>
        <h2>Error 404</h2>
      </section>
    </Page>
  );
};
