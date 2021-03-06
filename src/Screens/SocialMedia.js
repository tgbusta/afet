import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Timeline } from "react-twitter-widgets";

export class SocialMedia extends Component {
  render() {
    return (
      <Container>
        <Row className="m-3 p-3">
          <h1>Sosyal Medya</h1>
        </Row>
        <Row>
          <Col >
            <h2 className="m-3 p-3">Twitter'da Afet Yardımları</h2>
            <blockquote
              class="twitter-tweet"
              data-conversation="none"
              data-lang="tr"
              data-theme="light"
            >
              <p lang="tr" dir="ltr">
                Afet-acil durum yardımlarından kimler faydalanabilir? Nasıl
                destek veriliyor? Nasıl başvurulur?👇
                <a href="https://twitter.com/hashtag/%C3%87%C3%B6z%C3%BCmOdakl%C4%B1SosyalYard%C4%B1m?src=hash&amp;ref_src=twsrc%5Etfw">
                  #ÇözümOdaklıSosyalYardım
                </a>
                <a href="https://twitter.com/hashtag/BizB%C3%BCy%C3%BCkBirAileyiz?src=hash&amp;ref_src=twsrc%5Etfw">
                  #BizBüyükBirAileyiz
                </a>
                <a href="https://twitter.com/deryayanikashb?ref_src=twsrc%5Etfw">
                  @deryayanikashb
                </a>{" "}
                <a href="https://t.co/dtbx9wHiLy">pic.twitter.com/dtbx9wHiLy</a>
              </p>
              &mdash; T.C. Aile ve Sosyal Hizmetler Bakanlığı (@tcailesosyal){" "}
              <a href="https://twitter.com/tcailesosyal/status/1445796131057844226?ref_src=twsrc%5Etfw">
                6 Ekim 2021
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>{" "}
          </Col>
          <Col >
            <h2 className="m-3 p-3">Bizi Twitter'da takip edin</h2>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "tcailesosyal",
              }}
              options={{
                height: "800",
                width: "600",
              }}
            >
              <a
                className="twitter-timeline"
                href="https://twitter.com/tcailesosyal?ref_src=twsrc%5Etfw"
              >
                Tweets by @tcailesosyal
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </Timeline>
          </Col>
        </Row>
        <Row className="mb-3">
          <h2 className="m-3 p-3">Sosyal Yardım Başvurularında Yeni Dönem</h2>
        </Row>
        <Row>
          <iframe
            width="560"
            height="600"
            src="https://www.youtube.com/embed/IgFWIBmLUys"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Row>
      </Container>
    );
  }
}

export default SocialMedia;
